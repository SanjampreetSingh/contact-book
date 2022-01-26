import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import ViewListIcon from "@mui/icons-material/ViewList"
import ViewModuleIcon from "@mui/icons-material/ViewModule"

export default function SearchBarComponent(props) {
  const { contacts, inputSearch, setInputSearch, alignment, handleChange } =
    props

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
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
              label={"Search Contacts"}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              variant="standard"
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
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
