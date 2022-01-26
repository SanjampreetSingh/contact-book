import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory } from "react-router-dom"

import EditContactComponent from "../../../components/contact/edit-contact/EditContactComponent"

export default function EditContact(props) {
  let { contactId } = useParams()
  const history = useHistory()

  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts || [])

  const formObj = Object.freeze({
    name: "",
    phone: "",
    email: "",
  })
  const [contactObj, setContactObj] = useState(formObj)

  const handleChange = e => {
    const name = e.target?.name
    let value = e?.target?.value
    setContactObj(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = () => {
    dispatch({
      type: "UPDATE_CONTACT",
      id: contactId,
      name: contactObj?.name,
      phone: contactObj?.phone,
      email: contactObj?.email,
    })
    history.push("/", { success: true, message: "Successfully updated!" })
  }

  useEffect(() => {
    let contact = contacts.filter(x => x.id === contactId)
    setContactObj(prev => ({
      ...prev,
      name: contact[0]?.name,
      phone: contact[0]?.phone,
      email: contact[0]?.email,
    }))
  }, [contactId, contacts])

  return (
    <EditContactComponent
      contact={contactObj}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
