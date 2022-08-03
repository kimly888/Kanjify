const Name = () => {
  return (
    <form action="localhost:4000/api/getKanji" method="GET">
      <input type="text" name="name" id="name" />
      <button type="submit">GO</button>
    </form>
  );
};

export default Name;
