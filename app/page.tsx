import GameSelector from '@/components/GameSelector';

const Page = () => {
  return (
    <div>
      <GameSelector />

      <section>
        <h2>Game Overview</h2>
        <p>No game on deck!</p>
        <p>Select a date above to view available games for that day.</p>
      </section>
    </div>
  );
};

export default Page;
