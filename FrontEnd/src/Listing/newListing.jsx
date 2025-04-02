import { AlertCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import FormError from "../Miscellaneous/Error"
import MainNavbar from "../Layout/mainNavbar"
import Footer from "../Layout/footer.jsx"
// import Footer from "../Layout/footer"
import axios from "axios"
export default function Newlisting() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (formData) => {
    try {
      console.log("your form data is", formData);
      // let newTool=await axios.post("http://localhost:5000/tools/new", formData, {
      let formData = await axios.post("http://localhost:5000/tools", formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      })

      // console.log(`Frontend data is: ${newTool.data}`);
    } catch (error) {
      // throw new Error(`Error on the fetching data from the frontend to backend the error is: ${error}`);
      console.error("Error on the while submitting data from the frontend to sending data to backend:", error.response ? error.response.data : error.message)
    }
    // console.log(data) 
    // console.log(data.Name)
  }


  //it will only get the only one error at the time.
  const firstError = Object.values(errors)[0];

  return (
    <>
      <MainNavbar />
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Submit New Tool</h2>
        {/* {firstError && <FormError error={errors.Name} />} */}
        {firstError && <FormError error={firstError} />}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tool Name *
                <span className="ml-2 text-xs text-gray-500">(Max 40 characters)</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter tool name"
                {...register("Name",
                  {
                    required: { value: true, message: "Please Make Sure that name is required to create a new listing." },
                    minLength: {
                      value: 3,
                      message: "Please Give the descriptive Name"
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
                placeholder="Company or developer name"
                {...register("companyName",
                  {
                    required: { value: true, message: "Give the credit who build this beutiful tool." },
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
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                {...register("releaseYear",
                  { required: { value: true, message: "Make sure to Write the release year." }, min: { value: 1920, message: "Write legiit Relase Year, After 1920" }, max: { value: new Date().getFullYear() + 1, message: "Over 2025 can't be existed." } }
                )}
              />
            </div>
            {/* {firstError && <FormError error={errors.releaseYear} />} */}
            {/* 
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tool Logo *
              </label>
              <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-indigo-500 transition-colors">
                <input type="file" className="hidden" accept="image/*" />
                <span className="text-gray-500">Drag & drop or click to upload</span>
              </div>
            </div> */}
          </div>
          {/* <FormError error={errors.oneLine} /> */}


          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              One-Liner Use Case *
              <span className="ml-2 text-xs text-gray-500">(Max 10 words)</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="e.g., 'Automated API testing platform for developers'"
              {...register("useCase",
                { required: { value: true, message: "Please write the Use Case" }, maxLength: { value: 20, message: "useCase can't be more than 20 characater length." } }
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
              placeholder="Describe features, benefits, and unique value proposition"
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
                  placeholder="Add technology"
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
              Submit Listing
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}