import TextField from "@mui/material/TextField"

export default function AddContactComponent(props) {
  const { handleCreateContactChange } = props
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
        onChange={handleCreateContactChange}
      />
      <TextField
        autoFocus
        margin="dense"
        id="email"
        label="Email Address"
        type="email"
        fullWidth
        variant="standard"
        onChange={handleCreateContactChange}
      />
      <TextField
        autoFocus
        margin="dense"
        id="phone"
        label="Phone"
        type="tel"
        fullWidth
        variant="standard"
        onChange={handleCreateContactChange}
      />
    </>
  )
}
