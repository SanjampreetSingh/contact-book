import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import ListContactsComponents from "../../../components/contact/list-contacts/ListContactsComponents"

export default function ListContacts() {
  const dispatch = useDispatch()
  // for changing ui between table and card mode
  const [alignment, setAlignment] = useState("module")
  // dialog delete
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const handleCloseDeleteDialog = (success, id) => {
    if (success === true) {
      dispatch({
        type: "DELETE_CONTACT",
        id: deleteId,
      })
    }
    setOpenDeleteDialog(false)
  }
  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
  }

  // dialog create
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [contactObj, setcontactObj] = useState()
  const handleCreateDialogDialog = (success, id) => {
    if (success === true) {
      dispatch({
        type: "ADD_CONTACT",
        name: contactObj?.name,
        phone: contactObj?.phone,
        email: contactObj?.email,
      })
    }
    setOpenCreateDialog(false)
  }
  const handleClickOpenCreateDialog = () => {
    setOpenCreateDialog(true)
  }

  // contact
  const contacts = useSelector(state => state.contacts || [])
  return (
    <ListContactsComponents
      contacts={contacts}
      alignment={alignment}
      setAlignment={setAlignment}
      setDeleteId={setDeleteId}
      openDeleteDialog={openDeleteDialog}
      handleCloseDeleteDialog={handleCloseDeleteDialog}
      handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
      openCreateDialog={openCreateDialog}
      handleClickOpenCreateDialog={handleClickOpenCreateDialog}
      handleCreateDialogDialog={handleCreateDialogDialog}
    />
  )
}
