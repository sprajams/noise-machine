import { useState, useEffect } from "react";
import Pad from "../Pad";
import styles from "./styles.module.scss";

const PAD_ARR = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
function Machine() {
  const [key, setKey] = useState("");

  const handlePress = (value) => {
    console.log("pressed", value);
  };

  useEffect(() => {
    const keydownListener = (e) => {
      if (PAD_ARR.includes(e.key.toUpperCase())) {
        handlePress(e.key);
      }
    };
    window.addEventListener("keydown", keydownListener);
    return () => {
      window.removeEventListener("keydown", keydownListener);
    };
  }, []);

  return (
    <div>
      <h2>Machine</h2>
      <ul className={styles.padList}>
        {PAD_ARR
          ? PAD_ARR.map((elem, i) => {
              const onClick = () => {
                handlePress(elem);
              };
              return (
                <li key={i}>
                  <Pad onClick={onClick} label={elem} />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default Machine;
