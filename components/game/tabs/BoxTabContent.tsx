import { GameResponse } from '@/types/statsAPI';
import ScoringBox from '../../stats/ScoringBox';
import BattingStats from '../../stats/BattingStats';
import PitchingStats from '../../stats/PitchingStats';

type BoxTabContentProps = {
  liveGameData: GameResponse;
  gameState: string | undefined;
};

const BoxTabContent = ({ liveGameData, gameState }: BoxTabContentProps) => {
  return (
    <div className="space-y-4 md:space-y-12">
      <ScoringBox liveGameData={liveGameData} gameState={gameState} />
      <BattingStats liveGameData={liveGameData} gameState={gameState} />
      <PitchingStats gameState={gameState} />
    </div>
  );
};

export default BoxTabContent;
