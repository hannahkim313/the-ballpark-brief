import { GameResponse } from '@/types/statsAPI';
import Section from '../ui/Section';
import { formatGameDate } from '@/utils/game';

type GameOverviewProps = {
  liveGameData: GameResponse;
};

const GameOverview = ({ liveGameData }: GameOverviewProps) => {
  const {
    gameData: { datetime, teams, venue },
  } = liveGameData;

  return (
    <Section className="text-center">
      <h2>Game Overview</h2>

      <div className="content-container data-card">
        <div className="space-y-4">
          <p className="inline-flex items-center gap-4">
            <span className="inline-flex flex-col whitespace-nowrap md:w-3xs">
              <span className="text-lg font-bold md:hidden">
                {teams.away.abbreviation}
              </span>
              <span className="hidden text-lg font-bold md:inline md:text-xl">
                {teams.away.name}
              </span>
              <abbr
                title="Team's number of wins vs. number of losses"
                className="text-subtle mx-auto w-fit font-normal"
              >
                {`(${teams.away.record.leagueRecord.wins} - ${teams.away.record.leagueRecord.losses})`}
              </abbr>
            </span>
            @
            <span className="inline-flex flex-col whitespace-nowrap md:w-3xs">
              <span className="text-lg font-bold md:hidden">
                {teams.home.abbreviation}
              </span>
              <span className="hidden text-lg font-bold md:inline md:text-xl">
                {teams.home.name}
              </span>
              <abbr
                title="Team's number of wins vs. number of losses"
                className="text-subtle mx-auto w-fit font-normal"
              >
                {`(${teams.home.record.leagueRecord.wins} - ${teams.home.record.leagueRecord.losses})`}
              </abbr>
            </span>
          </p>

          <div className="font-bold">
            <p>{formatGameDate(datetime.officialDate)}</p>
            <p>{`${datetime.time} ${datetime.ampm} ${venue.timeZone.tz}`}</p>
          </div>

          <p className="text-subtle">{`${venue.name} in ${venue.location.city}, ${venue.location.stateAbbrev}`}</p>
        </div>
      </div>
    </Section>
  );
};

export default GameOverview;
