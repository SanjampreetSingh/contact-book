import { useState } from "react"
import { useDispatch } from "react-redux"
import ListContactsComponents from "../../../components/contact/list-contacts/ListContactsComponents"

export default function ListContacts(props) {
  const dispatch = useDispatch()
  const alertState = props?.location?.state
  const { contacts, favourites } = props

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

  // alert
  const [alertSuccessToggle, setAlertSuccessToggle] = useState(
    props?.location?.state?.success || false
  )

  // dialog create
  const formObj = Object.freeze({
    name: "",
    phone: "",
    email: "",
  })
  const [openCreateDialog, setOpenCreateDialog] = useState(false)
  const [contactObj, setcontactObj] = useState(formObj)

  const handleCreateChange = e => {
    const name = e.target?.name
    let value = e?.target?.value
    setcontactObj(prev => ({
      ...prev,
      [name]: value,
    }))
  }

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

  const handleFavourite = (success, id) => {
    if (success === true) {
      dispatch({
        type: "ADD_FAV",
        id: id,
      })
    } else {
      dispatch({
        type: "DELETE_FAV",
        id: id,
      })
    }
  }

  return (
    <ListContactsComponents
      favourites={favourites}
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
      handleCreateChange={handleCreateChange}
      contactObj={contactObj}
      alertSuccessToggle={alertSuccessToggle}
      setAlertSuccessToggle={setAlertSuccessToggle}
      alertState={alertState}
      handleFavourite={handleFavourite}
    />
  )
}
