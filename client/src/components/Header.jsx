import "./Header.css";
import Name from "./Name";

const Header = ({ setKanjiData }) => {
  return (
    <header>
      <h1 className="title">Kanjify</h1>
      <h2>Enter your name</h2>
      <Name setKanjiData={setKanjiData} />
    </header>
  );
};

export default Header;
