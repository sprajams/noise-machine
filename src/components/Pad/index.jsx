import styles from "./styles.module.scss";

function Pad({ label }) {
  return (
    <div>
      <button className={styles.btn}>
        <span className={styles.btnTop}>{label}</span>
        <span className={styles.btnBottom}></span>
      </button>
    </div>
  );
}

export default Pad;
