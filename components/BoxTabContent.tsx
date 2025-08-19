import ScoringBox from './ScoringBox';
import BattingStats from './BattingStats';

const BoxTabContent = () => {
  return (
    <div className="space-y-4 md:space-y-12">
      <ScoringBox />
      <BattingStats />
    </div>
  );
};

export default BoxTabContent;
