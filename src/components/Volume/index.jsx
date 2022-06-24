import styles from "./styles.module.scss";

function Volume({ setVolume, volume }) {
  const handleChange = (e) => {
    const rawData = e.target.value;
    const vol = Math.round(rawData);
    setVolume(vol);
  };
  return (
    <div>
      <h2>volume</h2>
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
        />
      </div>
    </div>
  );
}

export default Volume;
