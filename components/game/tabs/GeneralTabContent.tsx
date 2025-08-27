import { GameResponse } from '@/types/statsAPI';
import {
  formatGameTime,
  formatPitchTime,
  formatText,
  formatUmpires,
  formatWeather,
  getLastPitchTime,
} from '@/utils/game';

type GeneralTabContentProps = {
  liveGameData: GameResponse;
};

const GeneralTabContent = ({ liveGameData }: GeneralTabContentProps) => {
  const {
    gameData: { gameInfo, venue, weather },
    liveData: {
      boxscore: { officials },
    },
  } = liveGameData;

  return (
    <section>
      <h3>General Information</h3>

      <div className="data-card">
        <p>
          <span className="font-bold">Umpires: </span>
          {formatUmpires(officials)}.
        </p>
        <p>
          <span className="font-bold">Weather: </span>
          {formatWeather(weather.temp, weather.condition)}.
        </p>
        <p>
          <span className="font-bold">Wind: </span>
          {formatText(weather.wind)}.
        </p>
        <p>
          <span className="font-bold">Venue: </span>
          {formatText(venue.name)}.
        </p>
        <p>
          <span className="font-bold">First pitch: </span>
          {formatPitchTime(venue, gameInfo.firstPitch)}.
        </p>
        <p>
          <span className="font-bold">Last pitch: </span>
          {formatPitchTime(
            venue,
            getLastPitchTime(gameInfo.firstPitch, gameInfo.gameDurationMinutes)
          )}
          .
        </p>
        <p>
          <span className="font-bold">Time: </span>
          {formatGameTime(gameInfo.gameDurationMinutes)}.
        </p>
      </div>
    </section>
  );
};

export default GeneralTabContent;
