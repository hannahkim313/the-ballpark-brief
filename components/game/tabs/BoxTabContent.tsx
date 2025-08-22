import ScoringBox from '../../stats/ScoringBox';
import BattingStats from '../../stats/BattingStats';
import PitchingStats from '../../stats/PitchingStats';

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
