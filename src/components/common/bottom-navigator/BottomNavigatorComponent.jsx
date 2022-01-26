import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"

export default function BottomNavigatorComponent(props) {
  const { value, setValue } = props

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction label="All" icon={<PeopleAltIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Box>
    </Paper>
  )
}
