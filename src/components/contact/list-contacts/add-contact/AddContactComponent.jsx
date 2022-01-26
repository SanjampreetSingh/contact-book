import TextField from "@mui/material/TextField"

export default function AddContactComponent(props) {
  const { handleCreateChange, contactObj } = props
  return (
    <>
      <TextField
        required
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        type="text"
        fullWidth
        variant="outlined"
        onChange={handleCreateChange}
        name="name"
        value={contactObj?.name || ""}
      />
      <TextField
        required
        margin="dense"
        id="email"
        label="Email Address"
        type="email"
        fullWidth
        variant="outlined"
        onChange={handleCreateChange}
        name="email"
        value={contactObj?.email || ""}
      />
      <TextField
        required
        margin="dense"
        id="phone"
        label="Phone"
        type="tel"
        fullWidth
        variant="outlined"
        onChange={handleCreateChange}
        name="phone"
        value={contactObj?.phone || ""}
      />
    </>
  )
}
