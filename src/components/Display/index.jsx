import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import Volume from "../Volume";

function Display({ label, setOn, on, volume, setVolume }) {
  const onClick = () => {
    setOn(!on);
  };

  const [displayVolume, setDisplayVolume] = useState(true);
  // show volume for 1.5s only when user changes volume
  useEffect(() => {
    const volumeScreenTime = setTimeout(() => {
      setDisplayVolume(false);
    }, 750);
    return () => {
      clearTimeout(volumeScreenTime);
    };
  }, [volume]);

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
            {displayVolume ? <div>Volume: {volume}</div> : <div>{label}</div>}
          </div>
        )}
      </div>

      {/* volume control */}
      <Volume
        on={on}
        setVolume={setVolume}
        volume={volume}
        setDisplayVolume={setDisplayVolume}
      />

      <div className={styles.knobWrap}>
        <div className={styles.knob}></div>
        <div className={styles.knob}></div>
      </div>
    </div>
  );
}

export default Display;
