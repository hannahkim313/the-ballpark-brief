import { GameResponse } from '@/types/statsAPI';
import StatsData from './StatsData';

type BattingStatsProps = {
  liveGameData: GameResponse;
  gameState: string | undefined;
};

const BattingStats = ({ liveGameData, gameState }: BattingStatsProps) => {
  if (gameState !== 'Live' && gameState !== 'Final') {
    return (
      <div>
        <h3>Batting Stats</h3>
        <p>Batting stats will be available once the game begins.</p>
      </div>
    );
  }

  const {
    gameData: { teams },
    liveData: { boxscore },
  } = liveGameData;

  return (
    <div>
      <h3>Batting Stats</h3>

      <div className="space-y-4">
        <StatsData teams={teams} side="away" boxscore={boxscore} />
        <StatsData teams={teams} side="home" boxscore={boxscore} />
      </div>
    </div>
  );
};

export default BattingStats;
