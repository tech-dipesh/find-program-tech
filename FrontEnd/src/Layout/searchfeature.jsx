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
    
        {/* {search && filteredItems.length > 0 && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-lg rounded-lg p-2 w-full max-w-sm">
            {filteredItems.map((item) => (
              <Link 
                to={`/tools/${item._id}`} 
                key={item._id}
                className="block p-2 hover:bg-gray-100 rounded"
                onClick={() => setSearch('')}
              >
                <h3 className='text-blue-600'>{item.Name}</h3>
                <h4 className='text-blue-600'>{item.releaseYear}</h4>
                <h4 className='text-blue-600'>{item.useCase}</h>

              </Link>
            ))}
          </div>
        )} */}
{search && filteredItems.length > 0 && (
  <div className="fixed inset-0 bg-black/30 z-40 flex items-center justify-center">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white shadow-xl rounded-xl w-full max-w-md overflow-hidden">
      <div className="p-3 bg-gray-50 border-b flex justify-between items-center">
        <h3 className="font-medium text-gray-700">Search Results</h3>
        <button 
          onClick={() => setSearch('')}
          className="text-gray-500 hover:text-gray-700 h-6 w-6 flex items-center justify-center"
        >
          <span className="block relative w-4 h-4">
            <span className="block absolute w-4 h-0.5 bg-current top-1/2 -translate-y-1/2 rotate-45"></span>
            <span className="block absolute w-4 h-0.5 bg-current top-1/2 -translate-y-1/2 -rotate-45"></span>
          </span>
        </button>
      </div>
      
      <div className="max-h-96 overflow-y-auto py-2">
        {filteredItems.map((item) => (
          <Link
            to={`/tools/${item._id}`}
            key={item._id}
            className="flex items-start px-4 py-3 transition hover:bg-blue-50 border-b border-gray-100 last:border-b-0"
            onClick={() => setSearch('')}
          >
            <div className="flex-shrink-0 mr-3 mt-1">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {item.Name.charAt(0).toUpperCase()}
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="font-medium text-blue-600">{item.Name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  {item.releaseYear}
                </span>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {item.useCase}
                </span>
              </div>
            </div>
            
            <div className="flex-shrink-0 self-center text-gray-400 hover:text-blue-600">
              <span className="block font-bold text-lg">&rsaquo;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
)}

    </>
  )
}
