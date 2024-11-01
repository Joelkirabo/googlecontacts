import getContacts from '@/actions/contacts'

export default async function Content(){

    const contacts = await getContacts()
    
    return (
        <div className="col-span-12 md:col-span-9 flex flex-col gap-5">


        <div className="bg-white rounded-lg p-5">
          <h1 className="mb-5 font-bold text-2xl text-gray-500">Contacts</h1>
          <table className="w-full">
            <thead className="border-b border-gray-300">
              <tr>
                <td className="text-gray-500 font-bold text-sm p-2">Name</td>
                <td className="text-gray-500 font-bold text-sm p-2">Email</td>
                <td className="text-gray-500 font-bold text-sm p-2">Pnone</td>
                <td className="text-gray-500 font-bold text-sm p-2">Job title</td>
              </tr>
            </thead>
            <tbody>
                {
                    contacts.map((contact,i)=>{
                        return(
                            <tr key={i}>
                            <td className="p-2">{contact.name}</td>
                            <td className="p-2"></td>
                            <td className="p-2">{contact.phone}</td>
                          </tr>
                        )
                    })
                }
          
            </tbody>
          </table>
        </div>
      </div>
    )
}