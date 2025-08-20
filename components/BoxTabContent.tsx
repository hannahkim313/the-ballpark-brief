import ScoringBox from './ScoringBox';
import BattingStats from './BattingStats';
import PitchingStats from './PitchingStats';

const BoxTabContent = () => {
  return (
    <div className="space-y-4 md:space-y-12">
      <ScoringBox />
      <BattingStats />
      <PitchingStats />
    </div>
  );
};

export default BoxTabContent;
