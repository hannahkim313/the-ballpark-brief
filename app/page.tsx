import GameSelector from '@/components/GameSelector';
import GameOverview from '@/components/GameOverview';
import GameTabs from '@/components/GameTabs';

const Page = () => {
  return (
    <div>
      <GameSelector />
      <GameOverview />
      <GameTabs />
    </div>
  );
};

export default Page;
