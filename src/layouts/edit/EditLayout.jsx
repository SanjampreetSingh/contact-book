import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import EditHeader from "../../components/common/header/EditHeader"

export default function EditLayout(props) {
  const { children } = props
  return (
    <>
      <EditHeader />
      <Container maxWidth="lg" sx={{ my: 2 }} columns={{ xs: 12 }}>
        <Box sx={{ my: 4, py: 2 }}>{children}</Box>
      </Container>
    </>
  )
}
