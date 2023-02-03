import styles from "../styles/Demo.module.css";

export default function Badge() {
  return (
    <button type="button" className={`btn btn-secondary ${styles.badgeGoals}`}>
      Current Goals <span className="badge text-bg-secondary">💪</span>
    </button>
  );
}
