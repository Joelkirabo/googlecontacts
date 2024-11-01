"use server"


export default async function getContacts(){
    const contacts = [
        { name: "Alice Johnson", phone: "555-1234" },
        { name: "Bob Smith", phone: "555-5678" },
        { name: "Charlie Brown", phone: "555-8765" },
        { name: "David Lee", phone: "555-4321" },
        { name: "Eve Green", phone: "555-3456" },
        { name: "Frank White", phone: "555-6543" },
        { name: "Grace Kim", phone: "555-7890" },
        { name: "Hank Miller", phone: "555-0987" },
        { name: "Ivy Chen", phone: "555-2134" },
        { name: "Jack Black", phone: "555-3210" },
      ]; 
return contacts;
}