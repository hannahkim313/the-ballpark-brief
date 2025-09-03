import { GameResponse } from '@/types/statsAPI';
import LineupCard from '../LineupCard';

type LineupsTabContentProps = {
  liveGameData: GameResponse;
};

const LineupsTabContent = ({ liveGameData }: LineupsTabContentProps) => {
  return (
    <div>
      <h3>Starting Lineups</h3>

      <div className="flex flex-col gap-4 md:flex-row md:justify-center">
        <LineupCard liveGameData={liveGameData} isAway={true} />
        <LineupCard liveGameData={liveGameData} isAway={false} />
      </div>
    </div>
  );
};

export default LineupsTabContent;
