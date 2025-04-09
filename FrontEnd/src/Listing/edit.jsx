import React, { Fragment, useEffect, useState } from 'react'
import MainNavbar from '../Layout/mainNavbar'
import Footer from '../Layout/footer'
import { useForm } from 'react-hook-form'
import { updateItem, getItemById } from '../service/api'
import FormError from '../Miscellaneous/Error'
import { useNavigate, useParams } from 'react-router-dom'
import { toastError, toastSuccess } from '../Miscellaneous/react-toast'
import axios from 'axios'
import Loading from '../Miscellaneous/Loading'
import Delete from './delete'
//get the url id
export const Edit = () => {
  const [edit, setedit] = useState(null)
  let {id}=useParams();
  const navigate=useNavigate()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm()


  const onSubmit = async(formData) => {
    try {
      
      // console.log(data);
      const response=await updateItem(id, formData)
      navigate(`/tools/${id}`);
      setTimeout(() => {
        toastSuccess("Successfully updated the list")
      }, 50);
    }
    catch (error) {
      console.error(error);
      navigate(`/tools/${id}`);
      setTimeout(() => {
        toastError("Error while updating the code", error);
      }, 50);
      console.log("Error occured when updating the list");
    }
  }
  // const onSubmit = async (formData) => {
  //   try {
  //     const response = await updateItem(id, formData);
      
  //     navigate(`/tools/${id}`);
  //     setTimeout(() => {
        
  //       toastSuccess("Listing updated successfully!");
  //     }, 50);
  //   } catch (error) {
  //     console.error("Update error:", error);
  //     console.error("Error details:", error.response?.data || error.message);
  //     toastError("Failed to update listing. Please try again.");
  //   }
  // };


  // //useEffect will rerende when id is changed, 
  useEffect(() => {
    // let isMounted=true;
      const newValue=async(newUpdated)=>{
        try {
          const response=await getItemById(id)
          console.log(response.data);
          const updates = response.data.tools.find(all => all._id === id);
          setedit(updates);
          reset(updates);
          // reset(updates)
          // const editResponse = await axios.get(`http://localhost:5000/tools/${id}/comment`);
          // const editresponse=await API.get(`/tools/${id}/`, formData,)
          
          // const data=await axios.get(`/tools/${id}`, FormData)
          
          // const response=await axios.get(`/tools/${id}`)
          // console.log(response);
          // setedit(response.data);
        } catch (error) {
          console.error("Error on the useEffect", error.message)
          setedit(null)
        }
      }
      newValue()
  }, [id])
 
  const firstError = Object.values(errors)[0];

  if(!edit){
    return <Loading/>
  }
  console.log(edit);
  return (
    <React.Fragment>
      <MainNavbar />
        <div className="absolute ml-90 mt-25">
        {firstError && <FormError error={firstError} />}
        </div>
      <div className="h-screen place-items-center grid content-center">
        <form className="w-2/3 space-y-6 mt-50" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tool Name *
                <span className="ml-2 text-xs text-gray-500">(Max 40 characters)</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Updated tool name"
                //  value={edit.Name}
                {...register("Name",
                  {
                    required: { value: true, message: "Please update the Tool with new Name." },
                    minLength: {
                      value: 3,
                      message: "it Should have descriptive name"
                    },
                    maxLength: {
                      value: 20,
                      message: "Name can't be a more than 20 character Length"
                    }
                  }
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Founder/Company *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Updated developer"
                //  value={edit.companyName}
                {...register("companyName",
                  {
                    required: { value: true, message: "Owner can't be blank." },
                    minLength: {
                      value: 3,
                      message: "Make sure give the credit."
                    },
                  })}

              />
            </div>
          </div>
          {/* <FormError error={errors.companyName} /> */}
          {/* {firstError && <FormError error={errors.companyName} />} */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Release Date *
              </label>
              <input
                type="number"
                // value={edit.releaseYear}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                {...register("releaseYear",
                  { required: { value: true, message: "Make sure to Write the release year." }, min: { value: 1920, message: "Write legit Relase Year, After 1920" }, max: { value: new Date().getFullYear() + 1, message: "Over 2025 can't be existed." } }
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Url *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="moved page url"
                //  value={edit.webLink}
                {...register("webLink",
                  { required: { value: true, message: "Product url is required." }, minLength: { value: 5, message: "It should have at least 5 character Length" }, maxLength: { value: 35, message: "Product url can't be more than 35 Character Length", }, pattern: { value: /^https:\/\/.+\..+/, message: "Make sure you write the valid url." } }
                )}
              />
            </div>
          </div>

          {/* Logo Url Edit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo in url form *
              <span className="ml-2 text-xs text-gray-500">(Upload image (Coming Soon))</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Sorry for the incovinence we only accept the Logo in url form for making website a quicker."
              {...register("Logo",
                { required:false, minLength: { value: 5, message: "Please edit a legiit url." }, maxLength: { value: 150, message: "Url can't be more than 150 characater length." } }
              )}
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              One-Liner Use Case *
              <span className="ml-2 text-xs text-gray-500">(Max 10 words)</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Updated One Liner"
              //  value={edit.useCase}
              {...register("useCase",
                { required: { value: true, message: "Please write the Use Case" }, minLength: { value: 5, message: "Minimum should be more than 5 characters." }, maxLength: { value: 50, message: "useCase can't be more than 50 characater length." } }
              )}
            />
          </div>
          {/* {firstError && <FormError error={errors.oneLine} />} */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Detailed Description *
            </label>
            <input
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
              placeholder="Updated Features."
              //  value={edit.Description}
              {...register("Description",
                { required: { value: true, message: "Please write some Long Description" }, minLength: { value: 20, message: "It should have at least 20 character Length, for Description." } }
              )}
            />
          </div>
          {/* {firstError && <FormError error={errors.description} />} */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tech Stack *
              </label>
              <div className="flex flex-wrap gap-2 p-2 border rounded-lg">
                {/* <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">

                  <button className="ml-2 text-blue-6 00 hover:text-blue-800">×</button>
                </span> */}
                <input
                  type="text"
                  className="flex-1 min-w-[120px] p-1 outline-none"
                  placeholder="More technology technology"
                  // value={edit.techStack}
                  {...register("techStack",
                    { required: { value: true, message: "Please write at least one techStack." } }
                  )}
                />
              </div>
            </div>
          </div>
          {/* {firstError && <FormError error={errors.techStack} />} */}

          <div className="pt-6 border-t">
            <button disabled={isSubmitting} className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg">
              Update Listing
            </button>
          </div>
        </form>
      </div>
      <Footer />
      <Delete/>
    </React.Fragment>
  )
}
