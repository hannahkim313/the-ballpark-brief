import { GameResponse } from '@/types/statsAPI';
import StatsData from './StatsData';

type PitchingStatsProps = {
  liveGameData: GameResponse;
  gameState: string | undefined;
};

const PitchingStats = ({ liveGameData, gameState }: PitchingStatsProps) => {
  if (gameState !== 'Live' && gameState !== 'Final') {
    return (
      <div>
        <h3>Pitching Stats</h3>
        <p>Pitching stats will be available once the game begins.</p>
      </div>
    );
  }

  const {
    gameData: { teams },
    liveData: { boxscore },
  } = liveGameData;

  return (
    <div>
      <h3>Pitching Stats</h3>

      <div className="space-y-4">
        <StatsData
          teams={teams}
          side="away"
          boxscore={boxscore}
          isBattingStats={false}
        />
        <StatsData
          teams={teams}
          side="home"
          boxscore={boxscore}
          isBattingStats={false}
        />
      </div>
    </div>
  );
};

export default PitchingStats;
