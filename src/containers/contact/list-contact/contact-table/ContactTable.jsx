import { useState } from "react"
import ContactTableComponent from "../../../../components/contact/list-contacts/contact-table/ContactTableComponent"

export default function ContactTable(props) {
  const { contacts } = props
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const tableColumnProperty = [
    { id: "name", label: "Full Name", minWidth: 100 },
    {
      id: "phone",
      label: "Phone",
      minWidth: 100,
      format: value => (
        <a href={"tel:" + value} target="_blank" rel="noreferrer">
          {value}
        </a>
      ),
    },
    {
      id: "email",
      label: "Email",
      minWidth: 100,
      format: value => (
        <a href={"mailto:" + value} target="_blank" rel="noreferrer">
          {value}
        </a>
      ),
    },
    {
      id: "action",
      label: "Action",
      minWidth: 100,
    },
  ]

  return (
    <ContactTableComponent
      page={page}
      contacts={contacts}
      columns={tableColumnProperty}
      rowsPerPage={rowsPerPage}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  )
}
