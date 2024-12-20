"use client"
import { Button } from "@/components/ui/button";
import {Plus,LucideUser,LucideTrash,LucideImport,LucideHammer,LucideHistory,LucideDownload, LucideMenu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar(){
  const router = useRouter()
  const [show, setShow] = useState(false)
  function menu(){
    setShow(!show)
  }
    return(
      <>  
      <LucideMenu onClick={()=>menu()} className={`fixed flex md:hidden top-1 right-1`}/>      
        <div className={`${show?"flex bg-gray-100 p-5 md:col-span-3  absolute md:relative mt-5 rounded-xl z-50":"hidden"} md:flex col-span-3 font-sans text-gray-500 font-bold text-sm flex-col gap-5 `}>
        
        <div><Button onClick={()=>
          {router.push('/new') 
          setShow(!show)}} className="bg-blue-500 py-[1px] px-2"><Plus className="h-5 w-5"/>Create contact</Button></div>


        <div className="flex flex-col gap-3">
          <div className="flex gap-3"><LucideUser className="h-5 w-5"/>Contacts</div>
          <div className="flex gap-3"><LucideHistory className="h-5 w-5"/>Frequent</div>
          <div className="flex gap-3"><LucideDownload className="h-5 w-5"/>Other contacts</div>
        </div>
        <h1 className="text-gray-800">Fix & manage</h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3"><LucideHammer className="h-5 w-5"/>Merge & fix</div>
          <div className="flex gap-3"><LucideImport className="h-5 w-5"/>Import</div>
          <div className="flex gap-3"><LucideTrash className="h-5 w-5"/>Trash</div>
        </div>
      </div>
      </>
    )
}