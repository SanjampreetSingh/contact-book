import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import { red } from "@mui/material/colors"
import FavoriteIcon from "@mui/icons-material/Favorite"
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"
import CallIcon from "@mui/icons-material/Call"
import VerticalMenuComponent from "./vertical-menu/VerticalMenuComponent"

export default function ContactCardComponent(props) {
  const { contacts, handleClickOpenDeleteDialog } = props

  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 1, lg: 12 }}>
      {contacts.map((value, index) => (
        <Grid item xs={4} key={index?.toString()}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {value?.name[0] || "F"}
                </Avatar>
              }
              action={
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <VerticalMenuComponent
                    contactId={value?.id}
                    handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
                  />
                </CardActions>
              }
              title={value.name.split(" ")[0] || "First Name"}
              subheader={value.name.split(" ")[1] || "Last Name"}
            />
            <CardActions>
              <Button
                size="small"
                startIcon={<SendIcon />}
                onClick={() => window.open("mailto:" + value?.email, "_blank")}
              >
                Email
              </Button>
              <Button
                size="small"
                startIcon={<CallIcon />}
                onClick={() => window.open("tel:" + value?.phone, "_blank")}
              >
                Call
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
