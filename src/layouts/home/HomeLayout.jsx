import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

export default function HomeLayout(props) {
  const { children } = props
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ my: 4, py: 2 }}>{children}</Box>
      </Container>
    </>
  )
}
