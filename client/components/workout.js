import { useState } from "react";
import Types from "./types";

// Bootstrap Form
export default function Workout() {
  const [typeSelected, setTypeSelected] = useState(false);
  const [exercises, setExercises] = useState([]);

  const typesOfExercises = [
    { label: "Balance", id: 1 },
    { label: "Cardio", id: 2 },
    { label: "Flexibility", id: 3 },
    { label: "Strength", id: 4 },
  ];

  const balance = [
    { label: "Pilates", id: 1 },
    { label: "Tai Chi", id: 2 },
    { label: "Yoga", id: 3 },
  ];

  const cardio = [
    { label: "Basketball", id: 1 },
    { label: "Climbing Stairs", id: 2 },
    { label: "Cycling", id: 3 },
    { label: "Dancing", id: 4 },
    { label: "Hiking", id: 5 },
    { label: "Jogging", id: 6 },
    { label: "Jump Roping", id: 7 },
    { label: "Rowing", id: 8 },
    { label: "Running", id: 9 },
    { label: "Step Aerobics", id: 10 },
    { label: "Swimming", id: 11 },
    { label: "Tennis", id: 12 },
    { label: "Walking", id: 13 },
    { label: "Water Aerobics", id: 14 },
  ];

  const strength = [{ label: "Squats", id: 1 }];
  // body weight, lifting weights, using a resistance band
  // HIIT & Crossfit

  const flexibility = [
    { label: "Foam Rolling", id: 1 },
    { label: "Stretching", id: 2 },
  ];

  // Refactor?
  function changeInput(input) {
    if (input === "Balance") {
      setExercises(balance);
      setTypeSelected(true);
    }

    if (input === "Cardio") {
      setExercises(cardio);
      setTypeSelected(true);
    }

    if (input === "Flexibility") {
      setExercises(flexibility);
      setTypeSelected(true);
    }

    if (input === "Strength") {
      setExercises(strength);
      setTypeSelected(true);
    }

    if (!input) {
      setTypeSelected(false);
    }
  }

  return (
    <form>
      <fieldset>
        <div className="mb-3">
          <label forhtml="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            required
          ></input>
        </div>
        <div className="mb-3">
          <label forhtml="type" className="form-label">
            Type
          </label>
          <Types
            label="The type of your exercise"
            options={typesOfExercises}
            onInputChange={changeInput}
          />
        </div>
        {typeSelected ? (
          <div className="mb-3">
            <label forhtml="exercise" className="form-label">
              Exercise
            </label>
            <Types label="Your specific exercise" options={exercises} />
          </div>
        ) : null}
        {/* <div className="mb-3">
          <label forhtml="reps" className="form-label">
            Reps
          </label>
          <input
            type="number"
            id="reps"
            className="form-control"
            placeholder="How many reps for this exercise?"
          />
        </div>
        <div className="mb-3">
          <label forhtml="sets" className="form-label">
            Sets
          </label>
          <input
            type="number"
            id="sets"
            className="form-control"
            placeholder="How many sets for the whole workout?"
          />
        </div>
        <div className="mb-3">
          <label forhtml="notes" className="form-label">
            Notes
          </label>
          <input
            type="text"
            id="notes"
            className="form-control"
            placeholder="Any notes or comments you would like to add"
          />
        </div> */}
        <button type="submit" className="btn btn-primary">
          Log Workout
        </button>
      </fieldset>
    </form>
  );
}

// TODOs: input validation (see login form validation); refactor
// left off here - look at MUI alert message in console
