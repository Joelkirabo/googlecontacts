
import Sidebar from "@/components/ui/Sidebar";
import Content from "@/components/Content";
import {LucideUser} from "lucide-react";



export default function Home() {

  return (
    <div className="relative">
          <div className="flex flex-col gap-3 md:grid grid-cols-12 bg-gray-100 p-3">
            <div className="col-span-3">
            <div className="flex gap-3">              
              <LucideUser className="text-blue-500"/>
              <span>Contacts</span>             
              
          </div>
            </div>

        <div  className="col-span-9">          
            <form className="max-w-2xl">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full py-2 ps-20 text-sm text-gray-900 border border-none rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search contacts"/>
                    
                </div>
            </form>
        </div>

      </div>
    <div className="grid grid-cols-12 bg-gray-100 h-screen p-5">
      <Sidebar/>
      <Content/>
    </div>
    </div>
  );
}
