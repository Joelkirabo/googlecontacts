"use client"

import { saveContacts } from "@/actions/contacts";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { useState } from "react";
import { revalidatePath } from "next/cache";

type FormValues={
    name:string;
    phone:string;
}

export default function Createnewcontact(){

    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const {register,handleSubmit, formState:{errors}, reset} = useForm<FormValues>();

    async function onsubmit(values:FormValues){
        const data = {
            name:values.name,
            phone:values.phone
        }
        setLoading(true)
        await saveContacts(data)
        
        setLoading(false)
        reset()     
        router.push("/")
        revalidatePath('/')
    }

    return (
        <div className="p-5">   
      
            <h1 className="font-bold text-center text-2xl p-5 text-gray-500">Create new contact</h1>        

            <form onSubmit={handleSubmit(onsubmit)} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input {...register('name',{required:'Name is required'})}  type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter name"/>
                {errors.name && <p className="text-xs text-red-500 font-bold">{errors.name.message}</p>}
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input {...register('phone',{required:'Phone number is required'})}  type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                {errors.phone && <p className="text-xs text-red-500 font-bold">{errors.phone.message}</p>}
            </div>

            <button disabled={loading} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading?'Saving....':'Save contact'}</button>
            </form>

        </div>
    )
}


