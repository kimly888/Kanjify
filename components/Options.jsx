// import "./Options.css";

const Options = ({ kanjiData }) => {
  return (
    <form action="/api/favorite" method="GET">
      <label htmlFor="options">
        <select name="options" id="options">
          <option value="">--Choose your favorite--</option>
          {kanjiData.map((name, index) => {
            return (
              <option value={name.kanjiName} key={index}>
                {name.kanjiName}
              </option>
            );
          })}
        </select>
        <button type="submit">Submit</button>
      </label>
    </form>
  );
};

export default Options;
