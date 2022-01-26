import { useState } from "react"
import { Link } from "react-router-dom"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@mui/material/IconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"

export default function VerticalMenuComponent(props) {
  const { contactId, handleClickOpenDeleteDialog, setDeleteId } = props
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <IconButton
        aria-label="settings"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        component={Link}
        to={"/edit/" + contactId}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem
          onClick={() => {
            handleClose()
            handleClickOpenDeleteDialog()
            setDeleteId(contactId)
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}
