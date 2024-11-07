"use server"
import { ContactProps } from "@/types/types";
import {db } from "@/lib/db";
import { revalidatePath } from "next/cache";


export default async function getContacts(){
    const contacts = await db.contacts.findMany();    
    
    return contacts;
  }
  revalidatePath('/')

export async function saveContacts(data:ContactProps){
  try {
     await db.contacts.create({
      data
    })
  } catch (error) {
    console.log(error)
  }
}




