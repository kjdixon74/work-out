import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// Material UI AutoComplete
export default function Types() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={typesOfExercises}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="The type of your exercise" />
      )}
    />
  );
}

// https://www.rmhp.org/medicaid-chp-plus/self-management/fitness/types-of-exercises
const typesOfExercises = [
  { label: "Aerobic & Cardio", id: 1 },
  { label: "HIIT & Crossfit", id: 2 },
  { label: "Strength Training", id: 3 },
  { label: "Stretching & Balancing", id: 4 },
  { label: "Yoga & Pilates", id: 5 },
];
