import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import Header from "../../components/common/header/Header"

// import Footer from "../../components/common/footer/Footer"

export default function HomeLayout(props) {
  const { children } = props
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ my: 4, py: 2 }}>{children}</Box>
      </Container>
      {/* <Footer /> */}
    </>
  )
}
