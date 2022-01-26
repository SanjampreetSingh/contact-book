import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ViewListIcon from "@mui/icons-material/ViewList"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import Button from "@mui/material/Button"

export default function SearchBarComponent(props) {
  const { contacts, inputSearch, setInputSearch, alignment, handleChange } =
    props

  return (
    <Grid
      container
      spacing={{ xs: 2 }}
      columns={{ xs: 1, lg: 12 }}
      sx={{ mb: 4 }}
    >
      <Grid item xs={3}>
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 1, mx: 1 }}
          startIcon={<PersonAddIcon />}
        >
          Add new contact
        </Button>
      </Grid>
      <Grid item xs={7}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          disableClearable
          options={contacts}
          getOptionLabel={option => option.toString() || ""}
          value={inputSearch}
          onChange={(event, newInputValue) => setInputSearch(newInputValue)}
          onInputChange={(event, newInputValue) =>
            setInputSearch(newInputValue)
          }
          renderInput={params => (
            <TextField
              {...params}
              label={"Search contacts"}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              variant="standard"
            />
          )}
        />
      </Grid>
      <Grid item xs={2}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  )
}