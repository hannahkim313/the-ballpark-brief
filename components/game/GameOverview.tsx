import Section from '../ui/Section';

type GameOverviewProps = {
  selectedGame: string | null;
};

const GameOverview = ({ selectedGame }: GameOverviewProps) => {
  return (
    <Section className="text-center">
      <h2>Game Overview</h2>

      <div className="content-container data-card">
        {/* TODO: Replace content with dynamic values from API */}
        <div className="space-y-4">
          <p className="inline-flex items-center gap-4">
            <span className="inline-flex flex-col whitespace-nowrap md:w-3xs">
              <span className="text-lg font-bold md:hidden">LAA</span>
              <span className="hidden text-lg font-bold md:inline md:text-xl">
                Los Angeles Angels
              </span>
              <abbr
                title="Team's number of wins vs. number of losses"
                className="text-subtle font-normal"
              >
                (55 - 49)
              </abbr>
            </span>
            @
            <span className="inline-flex flex-col whitespace-nowrap md:w-3xs">
              <span className="text-lg font-bold md:hidden">SEA</span>
              <span className="hidden text-lg font-bold md:inline md:text-xl">
                Seattle Mariners
              </span>
              <abbr
                title="Team's number of wins vs. number of losses"
                className="text-subtle font-normal"
              >
                (55 - 49)
              </abbr>
            </span>
          </p>

          <div className="font-bold">
            <p>July 25, 2025</p>
            <p>6:40 PM PDT</p>
          </div>

          <p className="text-subtle">T-Mobile Park in Seattle, WA</p>
        </div>
      </div>
    </Section>
  );
};

export default GameOverview;
