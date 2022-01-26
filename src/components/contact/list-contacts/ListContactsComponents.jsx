import ContactCardComponent from "./contact-card/ContactCardComponent"
import SearchBar from "../../../containers/contact/list-contact/search-bar/SearchBar"
import ContactTable from "../../../containers/contact/list-contact/contact-table/ContactTable"
import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import DialogBoxComponent from "../../common/dialog-box/DialogBoxComponent"
import AddContactComponent from "./add-contact/AddContactComponent"

export default function ListContactsComponents(props) {
  const {
    contacts,
    alignment,
    setAlignment,
    alertSuccessToggle,
    setAlertSuccessToggle,
    alertState,
    setDeleteId,
    openDeleteDialog,
    handleCloseDeleteDialog,
    handleClickOpenDeleteDialog,
    openCreateDialog,
    handleClickOpenCreateDialog,
    handleCreateDialogDialog,
    handleCreateChange,
    contactObj,
  } = props
  return (
    <>
      {/* Delete Dialog */}
      <DialogBoxComponent
        open={openDeleteDialog}
        handleClose={handleCloseDeleteDialog}
        DialogBody={
          "If you click on 'Agree', it will remove the contact. Do you really want to delete?"
        }
        DialogHeading={"Delete contact"}
      />

      {/* Create Dialog */}
      <DialogBoxComponent
        open={openCreateDialog}
        handleClose={handleCreateDialogDialog}
        DialogFormBody={
          <AddContactComponent
            handleCreateChange={handleCreateChange}
            contactObj={contactObj}
          />
        }
        DialogHeading={"Create new contact"}
        buttonDisagreeTitle="Cancel"
        buttonAgreeTitle="Create"
      />

      {/* Search */}
      <SearchBar
        contacts={contacts}
        alignment={alignment}
        setAlignment={setAlignment}
        handleClickOpenCreateDialog={handleClickOpenCreateDialog}
      />

      {/* Alert */}
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
          {alertState?.message}
        </Alert>
      ) : null}


      {/* Card and Table UI */}
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
