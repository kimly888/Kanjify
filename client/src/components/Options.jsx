// import "./Options.css";

const Options = ({ kanjiData}) => {

  return (
    <form action="http://localhost:4000/api/favorite" method="GET">
        <label for="options">
          <select name="options" id="options">
            <option value="">--Choose your favorite--</option>
            {kanjiData.map(name => {
              return <option value={name.kanjiName}>{name.kanjiName}</option>
            })}
          </select>
          <button type="submit">Submit</button>
        </label>
    </form>
  );
};

export default Options;
