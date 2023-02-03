// DON'T FORGET TO REFACTOR and do input validation (could prob use some from login form)
import Types from "./types";

export default function Workout() {
  // Bootstrap Form with customized date field
  return (
    <form>
      <fieldset>
        <div className="mb-3">
          <label forhtml="date" className="form-label">
            Date
          </label>
          <span className="form-control">
            <input
              type="text"
              id="month"
              name="month"
              placeholder="mm"
              required
              size="3"
              pattern="[0-9]{2}"
            />{" "}
            / <></>
            <input
              type="text"
              id="day"
              name="day"
              placeholder="dd"
              required
              size="3"
              pattern="[0-9]{2}"
            />{" "}
            / <></>
            <input
              type="text"
              id="year"
              name="year"
              placeholder="yyyy"
              required
              size="5"
              pattern="[2][0][2][0-9]"
            />
          </span>
        </div>
        <div className="mb-3">
          <label forhtml="type" className="form-label">
            Type
          </label>
          <Types />
        </div>
        <div className="mb-3">
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
        </div>
        <button type="submit" className="btn btn-primary">
          Log Workout
        </button>
      </fieldset>
    </form>
  );
}
