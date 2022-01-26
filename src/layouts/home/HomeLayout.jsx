import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

export default function HomeLayout(props) {
  const { children } = props
  return (
    <Container maxWidth="lg" sx={{ my: 2 }} columns={{ xs: 12 }}>
      <Box sx={{ my: 4, py: 2 }}>{children}</Box>
    </Container>
  )
}
