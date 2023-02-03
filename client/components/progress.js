import styles from "../styles/Demo.module.css";

export default function Progress() {
  return (
    <div className={styles.progressGoals}>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="top"
        data-bs-content="Top popover"
      >
        Goals Reached
      </button>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped"
          role="progressbar"
          aria-label="Default striped example"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
    </div>
  );
}

// left off here - incoporate js/popper to make functionality of popover work
