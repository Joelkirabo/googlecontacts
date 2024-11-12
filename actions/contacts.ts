"use server"
import { ContactProps } from "@/types/types";
import {prisma } from "@/lib/prisma";


//get contacts from db using prisma
export default async function getContacts(){
    const contacts = await prisma.contacts.findMany();    
    return contacts;
  }

export async function saveContacts(data:ContactProps){
  try {
     await prisma.contacts.create({
      data
    })
  

  } catch (error) {
    console.log(error)
  }
}







