"use client"
import { ContactProps } from "@/types/types"
import { useState } from "react"



export default function Searchandtable({contacts}:{contacts:ContactProps[]}){

    const [persons,setPersons] = useState(contacts)   

    function handlesearch(value:string){
        if(value===""){
            setPersons(contacts) 
        }else{
            
            const search = persons.filter((person)=>{

                return  person.name.toLowerCase().includes(value.toLowerCase())
                })
                setPersons(search)
        }                          

        }

    return(
        <div className="col-span-12 md:col-span-9 flex flex-col gap-5">

                
                      <div className={`bg-white rounded-lg p-5 `}>
                      <form className="max-w-2xl">   
                              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                      </svg>
                                  </div>
                                  <input onChange={(e)=>handlesearch(e.target.value)} type="search" id="default-search" className="block w-full py-2 ps-20 text-sm text-gray-900 border border-none rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search contacts"/>
                                  
                              </div>
                          </form>
        
                        <div>
                          
                        <h1 className="mb-5 font-bold text-2xl text-gray-500">Contacts({persons.length})</h1>
                        <table className={`w-full`}>
                          <thead className="border-b border-gray-300">
                            <tr>
                              <td className="text-gray-500 font-bold text-sm p-2">Name</td>
                              <td className="text-gray-500 font-bold text-sm p-2">Email</td>
                              <td className="text-gray-500 font-bold text-sm p-2">Phone</td>
                              <td className="text-gray-500 font-bold text-sm p-2">Job</td>
                            </tr>
                          </thead>
                          <tbody>
                              {

                                persons.length?(
                                    persons.map((contact,i)=>{
                                        return(
                                            <tr className="text-gray-800" key={i}>
                                            <td className="p-2">{contact.name}</td>
                                            <td className="p-2"></td>
                                            <td className="p-2">{contact.phone}</td>
                                            <td className="p-2"></td>
                                          </tr>
                                        )
                                    })
                                ):(<tr>
                                    <td colSpan={4} className="text-2xl text-center font-bold text-gray-500">No contacts to show</td>
                                </tr>)
                                 
                              }
                        
                          </tbody>
                        </table>
                        </div>
                      </div>  
                     
                     
                       

                
             

      </div>
    )
}