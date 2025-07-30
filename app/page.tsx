const Page = () => {
  const today = new Date();
  const maxDate = today.toISOString().split('T')[0];

  return (
    <div>
      <section>
        <label htmlFor="gameDate">Game date:</label>
        <input
          type="date"
          id="gameDate"
          name="gameDate"
          defaultValue={maxDate}
          min="2020-03-30"
          max={maxDate}
        />
      </section>
      <section>
        <h2>Game Overview</h2>
        <p>No game on deck!</p>
        <p>Select a date above to view available games for that day.</p>
      </section>
    </div>
  );
};

export default Page;
