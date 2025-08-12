const GameOverview = () => {
  return (
    <section className="px-content py-content bg-stone-100 text-center">
      <h2>Game Overview</h2>
      {/* TODO: Replace content with dynamic values from API */}
      <div className="space-y-4">
        <p className="inline-flex items-center gap-4">
          <span className="inline-flex flex-col whitespace-nowrap md:w-xs">
            <span className="text-lg font-semibold md:hidden">LAA</span>
            <span className="hidden text-lg font-semibold md:inline">
              Los Angeles Angels
            </span>
            <span>(55-49)</span>
          </span>
          @
          <span className="inline-flex flex-col whitespace-nowrap md:w-xs">
            <span className="text-lg font-semibold md:hidden">SEA</span>
            <span className="hidden text-lg font-semibold md:inline">
              Seattle Mariners
            </span>
            <span>(55-49)</span>
          </span>
        </p>
        <div>
          <p>July 25, 2025</p>
          <p>6:40 PM PDT</p>
        </div>
        <p>T-Mobile Park in Seattle, WA</p>
      </div>
    </section>
  );
};

export default GameOverview;
