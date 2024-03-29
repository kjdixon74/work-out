import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// Material UI AutoComplete
export default function Types(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.label} />}
      onInputChange={(event) => props.onInputChange(event.target.innerText)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
    />
  );
}

// Lesson learned: overwrite isOptionEqualToValue to make sure objects pointing to the correct instances
