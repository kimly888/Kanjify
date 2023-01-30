import styles from "./Header.module.css";
import Name from "./Name";
import { Fireworks } from "fireworks/lib/react";
import { useStateContext } from "../context/StateContext";

const Header = ({ setKanjiData }) => {
  const { isActive } = useStateContext();

  let fxProps = {
    colors: ["#ffc95e", "#fe5f55", "#5b5f97"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 2) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -10 : 0),
    }),
  };

  return (
    <header
      className={`${isActive ? styles.heroHalved : styles.hero} ${
        isActive ? styles.halfScreen : styles.fullScreen
      }`}
    >
      <h1 className={styles.title}>Kanjify</h1>

      <label className={styles.caption} htmlFor="name">
        Enter your name
      </label>
      <Name setKanjiData={setKanjiData} />

      {isActive && <Fireworks {...fxProps} />}
    </header>
  );
};

export default Header;
