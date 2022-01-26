import TextField from "@mui/material/TextField"

export default function AddContactComponent(props) {
  const { handleCreateChange, contactObj } = props
  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        type="text"
        fullWidth
        variant="standard"
        onChange={handleCreateChange}
        name="name"
        value={contactObj?.name || ""}
      />
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="Email Address"
        type="email"
        fullWidth
        variant="standard"
        onChange={handleCreateChange}
        name="email"
        value={contactObj?.email || ""}
      />
      <TextField
        autoFocus
        margin="dense"
        id="phone"
        label="Phone"
        type="tel"
        fullWidth
        variant="standard"
        onChange={handleCreateChange}
        name="phone"
        value={contactObj?.phone || ""}
      />
    </>
  )
}
