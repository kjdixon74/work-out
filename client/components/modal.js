import Workout from "./workout";
import styles from "../styles/Demo.module.css";

export default function Modal() {
  // Bootstrap Modal
  return (
    <>
      <button
        type="button"
        className="btn btn-primary log-workout-modal"
        id={styles.modalBtn}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Log Workout
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                How did you sweat today?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Workout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
