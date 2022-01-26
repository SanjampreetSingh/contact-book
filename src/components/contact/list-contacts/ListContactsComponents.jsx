import ContactCardComponent from "./contact-card/ContactCardComponent"
import SearchBar from "../../../containers/contact/search-bar/SearchBar"
import ContactTable from "../../../containers/contact/list-contact/contact-table/ContactTable"
import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import DialogBoxComponent from "../../common/dialog-box/DialogBoxComponent"

export default function ListContactsComponents(props) {
  const {
    contacts,
    alignment,
    setAlignment,
    alertSuccessToggle,
    setAlertSuccessToggle,
    alertMessage,
    openDeleteDialog,
    handleCloseDeleteDialog,
    handleClickOpenDeleteDialog,
    deleteId,
    setDeleteId,
  } = props
  return (
    <>
      <DialogBoxComponent
        open={openDeleteDialog}
        handleClose={handleCloseDeleteDialog}
        DialogBody={
          "If you click on 'Agree', it will remove the contact. Do you really want to delete?"
        }
        DialogHeading={"Delete contact"}
        deleteId={deleteId}
        setDeleteId={setDeleteId}
      />
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
        <ContactCardComponent
          contacts={contacts}
          handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
          setDeleteId={setDeleteId}
        />
      ) : (
        <ContactTable
          contacts={contacts}
          handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
          setDeleteId={setDeleteId}
        />
      )}
    </>
  )
}
