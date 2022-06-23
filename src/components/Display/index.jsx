import clsx from "clsx";
import styles from "./styles.module.scss";

function Display({ label, setOn, on }) {
  const onClick = () => {
    setOn(!on);
  };
  return (
    <div className={styles.outer}>
      <button className={styles.powerBtn} onClick={onClick}>
        <span
          className={clsx(styles.powerBtnInner, !on && styles.powerBtnInnerL)}
        >
          {on ? "ON" : null}
        </span>
        <span
          className={clsx(styles.powerBtnInner, on && styles.powerBtnInnerR)}
        >
          {on ? null : "OFF"}
        </span>
      </button>
      <div className={styles.screen}>{label}</div>
    </div>
  );
}

export default Display;
