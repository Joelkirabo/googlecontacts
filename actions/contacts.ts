
import { ContactProps } from "@/types/types";
import {db } from "@/lib/db";

export const  revalidate = true;

export default async function getContacts(){
  "use server"
    const contacts = await db.contacts.findMany();

    return contacts;
  }

export async function saveContacts(data:ContactProps){
  "use server"
  try {
     await db.contacts.create({
      data
    })
  } catch (error) {
    console.log(error)
  }
}