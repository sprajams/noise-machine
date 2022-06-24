import { useState, useEffect } from "react";
import Pad from "../Pad";
import Display from "../Display";
import styles from "./styles.module.scss";

const PAD_ARR = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const PAD_DATA = [
  {
    id: "Q",
    label: "Heater 1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: "W",
    label: "Heater 2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: "E",
    label: "Heater 3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: "A",
    label: "Heater 4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    id: "S",
    label: "Heater 6",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    id: "D",
    label: "Open HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: "Z",
    label: "Kick n Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "X",
    label: "Kick 1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: "C",
    label: "Close HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function Machine() {
  // power on-off of machine
  const [isOn, setIsOn] = useState(true);
  // screen display of which pad is pressed
  const [label, setLabel] = useState("");
  // volume of app
  const [volume, setVolume] = useState(45);

  const handlePress = (obj, url) => {
    setLabel(obj.label);
    const a = new Audio(url);
    a.play();
    // adjust volume
    a.volume = volume / 100;
  };

  useEffect(() => {
    if (isOn) {
      const keydownListener = (e) => {
        if (PAD_ARR.includes(e.key.toUpperCase())) {
          const targetObj = PAD_DATA.find((x) => x.id === e.key.toUpperCase());
          handlePress(targetObj, targetObj.url);
        }
      };
      window.addEventListener("keydown", keydownListener);
      return () => {
        window.removeEventListener("keydown", keydownListener);
      };
    } else {
      setLabel("");
    }
  }, [isOn]);

  return (
    <div>
      <div className={styles.main}>
        <Display
          label={label}
          setOn={setIsOn}
          on={isOn}
          setVolume={setVolume}
          volume={volume}
        />
        <ul className={styles.padList}>
          {PAD_DATA
            ? PAD_DATA.map((obj, i) => {
                const onClick = () => {
                  if (isOn) {
                    handlePress(obj, obj.url);
                  }
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
    </div>
  );
}

export default Machine;
