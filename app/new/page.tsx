"use client"

import { useState } from "react";
import { useForm } from "react-hook-form"

type FormValues={
    name:string;
    phone:string;
}

export default function createnewcontact(){

    const {register,handleSubmit, formState:{errors}, reset} = useForm<FormValues>();
    const [name,setName]=useState('')
    const [phone, setPhone] = useState('')

    function onsubmit(data:FormValues){
        setName(data.name);
        setPhone(data.phone);   
        reset()     
    }

    return (
        <div className="p-5">   
            <div>{name}  {phone}</div>
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

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}