import { useEffect, useRef, useState, useCallback } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

function Pad({ id, audioSrc, label, disabled, showLabel, volume }) {
  const [keyPressed, setKeyPressed] = useState(false);
  const audioRef = useRef(null);

  const playSound = useCallback(() => {
    if (!disabled) {
      audioRef.current.volume = volume / 100;
      audioRef.current.play();
      showLabel(label);
    }
  }, [disabled, showLabel, label, volume]);

  useEffect(() => {
    const keydownListener = (e) => {
      if (e.key.toLowerCase() === id) {
        playSound();
        setKeyPressed(true);
      }
    };
    const keyupListener = (e) => {
      if (e.key.toLowerCase() === id) {
        setKeyPressed(false);
      }
    };
    window.addEventListener("keydown", keydownListener);
    window.addEventListener("keyup", keyupListener);

    return () => {
      window.removeEventListener("keydown", keydownListener);
      window.removeEventListener("keyup", keyupListener);
    };
  }, [id, playSound]);
  console.log(styles);
  return (
    <button
      onClick={playSound}
      className={clsx(styles.btn, keyPressed && styles.keyPressed, "drum-pad")}
      aria-label={label}
      disabled={disabled}
      id={`pad-${id}`}
    >
      <span className={styles.btnTop}>{id.toUpperCase()}</span>
      <span className={styles.btnBottom}></span>
      <audio
        ref={audioRef}
        src={audioSrc}
        className="clip"
        id={id.toUpperCase()}
      ></audio>
    </button>
  );
}

export default Pad;
