import { useState } from "react"
import { useSelector } from "react-redux"
import ListContactsComponents from "../../../components/contact/list-contacts/ListContactsComponents"

export default function ListContacts() {
  const [alignment, setAlignment] = useState("module")

  const contacts = useSelector(state => state.contacts || [])
  return (
    <ListContactsComponents
      contacts={contacts}
      alignment={alignment}
      setAlignment={setAlignment}
    />
  )
}
