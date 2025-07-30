const GameSelector = () => {
  const today = new Date();
  const maxDate = today.toISOString().split('T')[0];

  return (
    <section>
      <h2>Select a Game</h2>

      <form action="">
        <label htmlFor="gameDate">Date of game:</label>
        <input
          type="date"
          id="gameDate"
          name="gameDate"
          defaultValue={maxDate}
          min="2020-03-30"
          max={maxDate}
        />

        <label htmlFor="game">Game:</label>
        <select name="game" id="game">
          <option value="">Select a game</option>
          {/* TODO: Replace options with dynamic values from API */}
          <option value="firstGame">First game</option>
          <option value="secondGame">Second game</option>
          <option value="ThirdGame">Third game</option>
        </select>

        <button type="submit">View Game</button>
      </form>
    </section>
  );
};

export default GameSelector;
