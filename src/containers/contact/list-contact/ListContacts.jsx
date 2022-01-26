import { useState } from "react"
import { useSelector } from "react-redux"
import ListContactsComponents from "../../../components/contact/list-contacts/ListContactsComponents"

export default function ListContacts() {
  const contacts = useSelector(state => state.contacts || [])
  return <ListContactsComponents />
}
