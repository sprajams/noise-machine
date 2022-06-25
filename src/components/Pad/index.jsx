import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

function Pad({ id, audioSrc, label }) {
  const [keyPressed, setKeyPressed] = useState(false);
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  useEffect(() => {
    const keydownListener = (e) => {
      if (e.key === id) {
        playSound();
        setKeyPressed(true);
      }
    };
    const keyupListener = (e) => {
      if (e.key === id) {
        setKeyPressed(false);
      }
    };
    window.addEventListener("keydown", keydownListener);
    window.addEventListener("keyup", keyupListener);
    return () => {
      window.removeEventListener("keydown", keydownListener);
      window.removeEventListener("keyup", keyupListener);
    };
  }, [id]);

  return (
    <div>
      <button
        onClick={playSound}
        className={clsx(styles.btn, keyPressed && styles.keyPressed)}
        aria-label={label}
      >
        <span className={styles.btnTop}>{id.toUpperCase()}</span>
        <span className={styles.btnBottom}></span>
      </button>
      <audio ref={audioRef} src={audioSrc}></audio>
    </div>
  );
}

export default Pad;
