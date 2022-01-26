import { Link } from "react-router-dom"

import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import Stack from "@mui/material/Stack"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
import IconButton from "@mui/material/IconButton"

export default function ContactTableComponent(props) {
  const {
    page,
    contacts,
    columns,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props

  return (
    <>
      <Stack spacing={2} style={{ width: "100%" }} component={Paper}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: 600 }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map(column => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "name" ? (
                              value
                            ) : column.id === "action" ? (
                              <>
                                <IconButton
                                  label="Edit"
                                  variant="contained"
                                  color="secondary"
                                  aria-label="edit"
                                  component={Link}
                                  to={"/contact/edit/" + row?.id?.toString()}
                                >
                                  <EditRoundedIcon />
                                </IconButton>
                                <IconButton
                                  label="Delete"
                                  variant="contained"
                                  color="error"
                                  aria-label="delete"
                                >
                                  <DeleteRoundedIcon />
                                </IconButton>
                              </>
                            ) : (
                              column.format(value)
                            )}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={contacts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>
    </>
  )
}
