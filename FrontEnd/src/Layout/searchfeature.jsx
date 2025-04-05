import React, {useEffect, useState, useMemo } from 'react'
import { Link} from "react-router-dom";
import {  getAllItems } from '../service/api';
//for similar to the connect-flash
import { toastError } from '../Miscellaneous/react-toast';
// export default  SearchFeature = () => {
  export default function searchfeature(){
  //so i should start with string on search as default
const [search, setSearch] = useState("")
const [tools, setTools] = useState([])
//  with this all of the listing info is fetching:
useEffect(() => {
  getAllItems()
    .then(res => {
      // Make sure to access the correct property from the response
      // Check your API response structure - it might be res.data or res.data.tools
      setTools(res.data.tools || res.data);
    })
    .catch(err => {
      console.error("Error fetching tools:", err);
      // Optional: Show error toast
      toastError("Failed to load listings");
    });
}, []);




  // let allName=show.name;
  // let allNames=allName.toLowerCase();

  // const filterItems=useMemo(() => {
  //   return show.filter((show)=> 
  //     show.Name.toLowerCase()==setsearch)},
  //    [search]
  //   )
    const filteredItems = useMemo(() => {
      // if (!search || !tools) return [];
      return tools.filter((tool) => 
      // tool?.Name?.toLowerCase?.().includes(search?.toLowerCase() || '')
      //first it will extract the tool.Name from the above and just check with the search query and try to match it
      // tool.Name.toLowerCase().includes(search?.toLowerCase()|| "") //this code is working for me but better approach would be safe searching with pass the condition
      //the includes condition is check whether both 2 value are same or not  like we can check on email validation with email.includes("@")
      tool?.Name?.toLowerCase()?.includes(search?.toLowerCase() || "")
      );
    }, [search, tools]);
  return (
    <>
    
    <form className="ml-lg max-w-sm mx-auto w-full">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <i className="fa-solid fa-magnifying-glass text-gray-500 text-lg"></i>
            </div>
            <input type="search" id="search" className="block w-full p-4 pl-12 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="New Developer..." onChange={((i)=>setSearch(i.target.value) )} value={search}/>
            <button type="submit" className="text-white absolute right-3 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700">Search</button>
          </div>
        </form>

    {/* {search &&filterItems.length>0
      {show.map((all)=>{
        <div className="text-center text-2xl align-top top-10" key={all._id}>
          <h3 className='text-blue-600'>{show.Name}</h3>
        </div>
      })
      }:
    } */}
    
        {search && filteredItems.length > 0 && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-lg rounded-lg p-2 w-full max-w-sm">
            {filteredItems.map((item) => (
              <Link 
                to={`/tools/${item._id}`} 
                key={item._id}
                className="block p-2 hover:bg-gray-100 rounded"
                onClick={() => setSearch('')}
              >
                <h3 className='text-blue-600'>{item.Name}</h3>
              </Link>
            ))}
          </div>
        )}


    </>
  )
}
