import { useState } from "react"
import { useSelector } from "react-redux"

import ListContacts from "./list-contact/ListContacts"
import BottomNavigatorComponent from "../../components/common/bottom-navigator/BottomNavigatorComponent"

export default function Contact(params) {
  const [navValue, setNavValue] = useState(0)
  const contacts = useSelector(state => state.contacts || [])
  const favourites = useSelector(state => state.favourites || [])
  const [inputSearch, setInputSearch] = useState("")

  return (
    <>
      <ListContacts
        contacts={
          inputSearch === ""
            ? navValue === 0
              ? contacts
              : contacts.filter(e => favourites.includes(e?.id))
            : contacts.filter(e => e.name.includes(inputSearch))
        }
        favourites={favourites}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />
      <BottomNavigatorComponent value={navValue} setValue={setNavValue} />
    </>
  )
}
