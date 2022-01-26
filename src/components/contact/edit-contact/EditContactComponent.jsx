import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

export default function EditContactComponent(props) {
  const { contact, handleChange, handleSubmit } = props

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Edit contact
          </Typography>

          <Grid container spacing={3} 
          sx={{ my: 2}}
          >
            <Grid item xs={12}>
              <TextField
                autoFocus
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                variant="outlined"
                type="text"
                value={contact?.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                variant="outlined"
                type="email"
                value={contact?.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone"
                fullWidth
                variant="outlined"
                type="tel"
                value={contact?.phone}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Update contact
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}
