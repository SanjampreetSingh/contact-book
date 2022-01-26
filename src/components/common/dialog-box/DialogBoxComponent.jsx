import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Button from "@mui/material/Button"

export default function DialogBoxComponent(props) {
  const {
    open,
    handleClose,
    DialogBody,
    DialogHeading,
    buttonDisagreeTitle,
    buttonAgreeTitle,
  } = props
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{DialogHeading}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {DialogBody}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          {buttonDisagreeTitle || "Disagree"}
        </Button>
        <Button onClick={() => handleClose(true)} autoFocus variant="contained">
          {buttonAgreeTitle || "Agree"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
