import getContacts from '@/actions/contacts'
import Searchandtable from './Searchandtable'

export default async function Content(){

    const contacts = await getContacts()
    
    return (
      <Searchandtable contacts = {contacts}/>
    )
}