import { useState } from "react"
import SearchBarComponent from "../../../components/contact/list-contacts/search-bar/SearchBarComponent"

export default function SearchBar(props) {
  const { contacts, alignment, setAlignment, handleClickOpenCreateDialog } =
    props
  const [inputSearch, setInputSearch] = useState("")

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }
  return (
    <SearchBarComponent
      contacts={contacts.map(obj => obj?.name)}
      inputSearch={inputSearch}
      setInputSearch={setInputSearch}
      alignment={alignment}
      handleChange={handleChange}
      handleClickOpenCreateDialog={handleClickOpenCreateDialog}
    />
  )
}
