import { GameResponse, PitcherResponse } from '@/types/statsAPI';
import useStatsAPI from '@/hooks/useStatsAPI';
import CenterMessage from '../ui/CenterMessage';
import { buildPitcherStats, getBattingOrder } from '@/utils/game';

type LineupCardProps = {
  liveGameData: GameResponse;
  isAway: boolean;
};

const LineupCard = ({ liveGameData, isAway }: LineupCardProps) => {
  const {
    gameData: { teams, probablePitchers },
    liveData: { boxscore },
  } = liveGameData;

  const team = isAway ? 'away' : 'home';
  const gameTeam = teams[team];
  const boxscoreTeam = boxscore.teams[team];
  const battingOrder = getBattingOrder(boxscore, team);
  const pitcherId = probablePitchers[team]?.id;

  const {
    data: pitcherData,
    loading: pitcherDataLoading,
    error: pitcherDataError,
  } = useStatsAPI<PitcherResponse>(
    pitcherId
      ? `v1/people/${pitcherId}?hydrate=stats(group=[pitching],type=[season])`
      : null
  );

  if (pitcherDataLoading) {
    return <CenterMessage>Loading...</CenterMessage>;
  }

  if (pitcherDataError) {
    return <CenterMessage>{pitcherDataError}</CenterMessage>;
  }

  const pitcherStats = buildPitcherStats(pitcherData?.people[0]);

  return (
    <article className="data-card flex-1/2 p-0">
      <div className="border-b-1 border-neutral-300 p-4 text-center">
        <h4 className="mb-0 font-bold md:text-xl">{gameTeam.name}</h4>
        <p className="text-subtle">
          <abbr title="Team's number of wins vs. number of losses">
            {`(${gameTeam.record.leagueRecord.wins} - ${gameTeam.record.leagueRecord.losses})`}
          </abbr>
        </p>
      </div>

      <div className="space-y-3 p-4 md:space-y-4">
        <div className="text-center">
          <h5 className="mb-0 font-semibold">Pitcher</h5>
          <p className="font-bold md:text-lg">{pitcherStats.fullName}</p>

          {pitcherStats.fullName !== 'TBD' && (
            <>
              <p className="text-subtle">
                <abbr title="Right-hand pitcher">{pitcherStats.hand}</abbr> |{' '}
                <abbr title="Uniform number">{pitcherStats.number}</abbr>
              </p>

              <p className="text-subtle">
                <abbr title="Pitcher's number of wins vs. number of losses">
                  {`${pitcherStats.wins}-${pitcherStats.losses}`}
                </abbr>
                ,{' '}
                <span>
                  {pitcherStats.era} <abbr title="Earned run average">ERA</abbr>
                </span>
                ,{' '}
                <span>
                  {pitcherStats.strikeOuts} <abbr title="Strikeouts">SO</abbr>
                </span>
              </p>
            </>
          )}
        </div>

        <div>
          <h5>Batters</h5>
          {battingOrder.length === 0 ? (
            <p className="font-semibold">TBD</p>
          ) : (
            <ol className="list-inside list-decimal">
              {battingOrder.map((batter) => {
                const player = boxscoreTeam.players[`ID${batter.person.id}`];

                return (
                  <li
                    key={batter.person.id.toString()}
                    className="font-semibold"
                  >
                    {player.person.fullName}{' '}
                    <abbr
                      title={`Position: ${player.position.name}`}
                      className="text-subtle"
                    >
                      {player.position.abbreviation}
                    </abbr>{' '}
                    <abbr title="Uniform number" className="text-subtle">
                      {`#${player.jerseyNumber}`}
                    </abbr>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </article>
  );
};

export default LineupCard;
