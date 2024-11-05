"use server"
import { ContactProps } from "@/types/types";
import {db } from "@/lib/db";

export default async function getContacts(){
    const contacts = await db.contacts.findMany();
    return contacts;}

export async function saveContacts(data:ContactProps){
  try {
     await db.contacts.create({
      data
    })
  } catch (error) {
    console.log(error)
  }
}