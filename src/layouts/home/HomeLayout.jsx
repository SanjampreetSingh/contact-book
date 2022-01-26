import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import BottomNavigator from "../../containers/common/bottom-navigator/BottomNavigator"
import SearchBar from "../../containers/common/search-bar/SearchBar"

export default function HomeLayout(props) {
  const { children } = props
  return (
    <>
      <Container maxWidth="lg" sx={{ my: 2 }} columns={{ xs: 12 }}>
        <SearchBar />
        <Box sx={{ my: 4, py: 2 }}>{children}</Box>
        <BottomNavigator />
      </Container>
    </>
  )
}
