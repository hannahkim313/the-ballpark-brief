import { GameResponse, PitcherResponse } from '@/types/statsAPI';
import useStatsAPI from '@/hooks/useStatsAPI';
import CenterMessage from '../ui/CenterMessage';

type LineupCardProps = {
  liveGameData: GameResponse;
  isAway: boolean;
};

const LineupCard = ({ liveGameData, isAway }: LineupCardProps) => {
  const {
    gameData: { teams, probablePitchers },
  } = liveGameData;

  const team = isAway ? 'away' : 'home';
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

  const pitcher = pitcherData?.people[0];

  const pitcherStats = {
    fullName: pitcher?.fullName ?? 'TBD',
    hand: pitcher?.pitchHand?.code ? `${pitcher.pitchHand.code}HP` : null,
    number: pitcher?.primaryNumber ? `#${pitcher.primaryNumber}` : null,
    era: pitcher?.stats[0]?.splits[0]?.stat.era ?? null,
    losses: pitcher?.stats[0]?.splits[0]?.stat.losses ?? null,
    strikeOuts: pitcher?.stats[0]?.splits[0]?.stat.strikeOuts ?? null,
    wins: pitcher?.stats[0]?.splits[0]?.stat.wins ?? null,
  };

  return (
    <article className="data-card flex-1/2 p-0">
      <div className="border-b-1 border-neutral-300 p-4 text-center">
        <h4 className="mb-0 font-bold md:text-xl">{teams[team].name}</h4>
        <p className="text-subtle">
          <abbr title="Team's number of wins vs. number of losses">
            {`(${teams[team].record.leagueRecord.wins} - ${teams[team].record.leagueRecord.losses})`}
          </abbr>
        </p>
      </div>

      {/* TODO: display probable pitcher before game and switch to actual pitcher when game is live */}
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
          <ol className="list-inside list-decimal">
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
          </ol>
        </div>
      </div>
    </article>
  );
};

export default LineupCard;
