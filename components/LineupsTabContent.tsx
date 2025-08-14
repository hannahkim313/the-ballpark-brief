import LineupCard from './LineupCard';

const LineupsTabContent = () => {
  return (
    <div>
      <h3>Starting Lineups</h3>

      <div className="flex flex-col gap-4 md:flex-row md:justify-center">
        {/* TODO: Fetch and render API data */}
        <LineupCard />
        {/* TODO: Fetch and render API data */}
        <LineupCard />
      </div>
    </div>
  );
};

export default LineupsTabContent;
