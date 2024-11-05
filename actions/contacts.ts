"use server"
import { ContactProps } from "@/types/types";
import { prismaClient } from "@/lib/db";


export default async function getContacts(){
    const contacts = await prismaClient.contacts.findMany() || [];
return contacts;}

export async function saveContacts(data:ContactProps){
  try {
    const newcontact = await prismaClient.contacts.create({
      data
    })
    console.log( ` ${newcontact} has been added`)
  } catch (error) {
    console.log(error)
  }
}