import clsx from "clsx";
import styles from "./styles.module.scss";
import Volume from "../Volume";

function Display({ label, setOn, on, volume, setVolume }) {
  const onClick = () => {
    setOn(!on);
  };
  return (
    <div className={styles.outer}>
      {/* power button */}
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

      {/* display screen */}
      <div className={clsx(styles.screen, !on && styles.screenOff)}>
        {!on ? null : (
          <div>
            <div>{label}</div>
            <div>Volume: {volume}</div>
          </div>
        )}
      </div>

      {/* volume control */}
      <Volume setVolume={setVolume} volume={volume} />
    </div>
  );
}

export default Display;
