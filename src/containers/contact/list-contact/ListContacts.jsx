import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import ListContactsComponents from "../../../components/contact/list-contacts/ListContactsComponents"

export default function ListContacts() {
  const dispatch = useDispatch()
  const [alignment, setAlignment] = useState("module")
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const handleCloseDeleteDialog = (success, id) => {
    if (success === true) {
      dispatch({
        type: "DELETE_CONTACT",
        id: id,
      })
    }
    setOpenDeleteDialog(false)
  }
  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
  }

  const contacts = useSelector(state => state.contacts || [])
  return (
    <ListContactsComponents
      contacts={contacts}
      alignment={alignment}
      setAlignment={setAlignment}
      openDeleteDialog={openDeleteDialog}
      handleCloseDeleteDialog={handleCloseDeleteDialog}
      handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
      deleteId={deleteId}
      setDeleteId={setDeleteId}
    />
  )
}
