import { useState, useEffect } from "react";
import Pad from "../Pad";
import styles from "./styles.module.scss";

const PAD_ARR = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const PAD_DATA = [
  { id: "Q", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { id: "W", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { id: "E", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  {
    id: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  { id: "S", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { id: "D", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  {
    id: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  { id: "C", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
];

function Machine() {
  const handlePress = (value, url) => {
    console.log("pressed", value);
    const a = new Audio(url);
    a.play();
  };

  useEffect(() => {
    const keydownListener = (e) => {
      if (PAD_ARR.includes(e.key.toUpperCase())) {
        console.log(PAD_DATA.find((x) => x.id === e.key.toUpperCase()).url);
        handlePress(
          e.key,
          PAD_DATA.find((x) => x.id === e.key.toUpperCase()).url
        );
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
        {PAD_DATA
          ? PAD_DATA.map((obj, i) => {
              const onClick = () => {
                handlePress(obj.id, obj.url);
              };
              return (
                <li key={i}>
                  <Pad onClick={onClick} label={obj.id} />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default Machine;
