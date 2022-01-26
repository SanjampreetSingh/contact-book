import ContactCardComponent from "./contact-card/ContactCardComponent"
import SearchBar from "../../../containers/contact/search-bar/SearchBar"
import ContactTable from "../../../containers/contact/list-contact/contact-table/ContactTable"
import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"

export default function ListContactsComponents(props) {
  const {
    contacts,
    alignment,
    setAlignment,
    alertSuccessToggle,
    setAlertSuccessToggle,
    alertMessage,
  } = props
  return (
    <>
      {alertSuccessToggle === true ? (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertSuccessToggle(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alertMessage}
        </Alert>
      ) : null}
      <SearchBar
        contacts={contacts}
        alignment={alignment}
        setAlignment={setAlignment}
      />
      {alignment === "module" ? (
        <ContactCardComponent contacts={contacts} />
      ) : (
        <ContactTable contacts={contacts} />
      )}
    </>
  )
}
