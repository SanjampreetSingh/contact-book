import ContactCardComponent from "./contact-card/ContactCardComponent"
import SearchBar from "../../../containers/contact/search-bar/SearchBar"

export default function ListContactsComponents(props) {
  const { contacts } = props
  return (
    <>
      <SearchBar />
      <ContactCardComponent contacts={contacts} />
    </>
  )
}
