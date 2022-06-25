import { useState, useEffect } from "react";
import Pad from "../Pad";
import Display from "../Display";
import styles from "./styles.module.scss";

const PAD_DATA = [
  {
    id: "q",
    label: "Heater 1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: "w",
    label: "Heater 2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: "e",
    label: "Heater 3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: "a",
    label: "Heater 4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    id: "s",
    label: "Heater 6",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    id: "d",
    label: "Open HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: "z",
    label: "Kick n Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "x",
    label: "Kick 1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: "c",
    label: "Close HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function Machine() {
  // power on-off of machine
  const [isOn, setIsOn] = useState(false);
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

  return (
    <div>
      <div className={styles.main} id="drum-machine">
        <Display
          id="display"
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
                  <li key={i} className="drum-pad" id={i}>
                    <Pad id={obj.id} label={obj.label} audioSrc={obj.url} />
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
