// import "./Options.css";

const Options = ({kanjiData}) => {

  return (
    <form action="http://localhost:4000/api/favorite" method="GET">
      <select name="kanji-options" id="">
        <option value="">--Choose your favorite--</option>
        {kanjiData.map(name => {
          return <option>{name.kanjiName}</option>
        })}
      </select>
      <button type="submit" name="submit">Submit</button>
    </form>
  );
};

export default Options;
