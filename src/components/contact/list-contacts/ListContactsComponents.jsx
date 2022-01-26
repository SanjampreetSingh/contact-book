import ContactCardComponent from "./contact-card/ContactCardComponent"
import SearchBar from "../../../containers/contact/search-bar/SearchBar"

export default function ListContactsComponents(props) {
  const { contacts, alignment, setAlignment } = props
  return (
    <>
      <SearchBar
        contacts={contacts}
        alignment={alignment}
        setAlignment={setAlignment}
      />
      {alignment === "module" ? (
        <ContactCardComponent contacts={contacts} />
      ) : null}
    </>
  )
}
