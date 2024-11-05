"use server"
import { ContactProps } from "@/types/types";
import {db } from "@/lib/db";


export default async function getContacts(){
    const contacts = await db.contacts.findMany() || [];
return contacts;}

export async function saveContacts(data:ContactProps){
  try {
    const newcontact = await db.contacts.create({
      data
    })
    console.log( ` ${newcontact} has been added`)
  } catch (error) {
    console.log(error)
  }
}