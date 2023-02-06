import styles from "../styles/Demo.module.css";

export default function Progress() {
  // Bootstrap Progress
  return (
    <div className={`progress ${styles.progressGoals}`}>
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
  );
}
