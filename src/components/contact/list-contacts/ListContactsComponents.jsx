import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"

import ContactCardComponent from "./contact-card/ContactCardComponent"
import AddContactComponent from "./add-contact/AddContactComponent"
import SearchBarComponent from "./search-bar/SearchBarComponent"
import DialogBoxComponent from "../../common/dialog-box/DialogBoxComponent"
import ContactTable from "../../../containers/contact/list-contact/contact-table/ContactTable"

export default function ListContactsComponents(props) {
  const {
    contacts,
    favourites,
    alignment,
    handleAlignmentChange,
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
    handleFavourite,
    inputSearch,
    setInputSearch,
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
      <SearchBarComponent
        contacts={contacts.map(obj => obj?.name)}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        alignment={alignment}
        handleChange={handleAlignmentChange}
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
          favourites={favourites}
          handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
          setDeleteId={setDeleteId}
          handleFavourite={handleFavourite}
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
