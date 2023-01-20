import styles from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.spinningContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}
