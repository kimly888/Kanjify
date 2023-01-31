import styles from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <>
      <p className={styles.text}>Loading...</p>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
      </div>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
      </div>
    </>
  );
}
