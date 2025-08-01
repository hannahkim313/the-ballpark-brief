const GameTabs = () => {
  return (
    <section>
      <h2>Game Details</h2>

      <nav>
        <ul role="tablist">
          <li role="presentation">
            <button role="tab" aria-selected="true">
              General
            </button>
          </li>
          <li role="presentation">
            <button role="tab" aria-selected="false">
              Lineups
            </button>
          </li>
          <li role="presentation">
            <button role="tab" aria-selected="false">
              Box
            </button>
          </li>
        </ul>
      </nav>

      {/* TODO: Conditionally render tab content */}
    </section>
  );
};

export default GameTabs;
