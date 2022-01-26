import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"

export default function BottomNavigatorComponent(props) {
  const { value, setValue } = props

  return (
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
  )
}
