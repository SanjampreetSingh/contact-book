import { useState } from "react"
import SearchBarComponent from "../../../components/contact/list-contacts/search-bar/SearchBarComponent"

export default function SearchBar() {
  const [contacts, setContacts] = useState([])
  const [alignment, setAlignment] = useState("list")
  const [inputSearch, setInputSearch] = useState("")

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }
  return (
    <SearchBarComponent
      contacts={contacts}
      inputSearch={inputSearch}
      setInputSearch={setInputSearch}
      alignment={alignment}
      handleChange={handleChange}
    />
  )
}
