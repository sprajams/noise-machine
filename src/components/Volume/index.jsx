import styles from "./styles.module.scss";

function Volume({ setVolume, volume, setDisplayVolume, on }) {
  const handleChange = (e) => {
    const rawData = e.target.value;
    const vol = Math.round(rawData);
    setVolume(vol);
    setDisplayVolume(true);
  };
  return (
    <div className={styles.outer}>
      <div className={styles.sliderWrap}>
        <input
          type="range"
          className={styles.slider}
          min="0"
          max="100"
          step="any"
          onChange={handleChange}
          value={volume}
          name="volume"
          disabled={!on}
        />
      </div>
    </div>
  );
}

export default Volume;
