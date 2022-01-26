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
  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 1, lg: 12 }}>
      <Grid item xs={4}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <VerticalMenuComponent />
              </CardActions>
            }
            title="First Name"
            subheader="Last Name"
          />
          <CardActions>
            <Button size="small" startIcon={<SendIcon />}>
              Email
            </Button>
            <Button size="small" startIcon={<CallIcon />}>
              Call
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
