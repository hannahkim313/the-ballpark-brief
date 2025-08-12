import GameSelector from '@/components/GameSelector';
import GameOverview from '@/components/GameOverview';
import GameTabs from '@/components/GameTabs';

const Page = () => {
  return (
    <div className="space-y-8">
      <GameSelector />
      <GameOverview />
      <GameTabs />
    </div>
  );
};

export default Page;
