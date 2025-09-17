import { GameResponse } from '@/types/statsAPI';
import PlayerDetails from './PlayerDetails';
import { isStarter } from '@/utils/game';

type StatsDataProps = {
  teams: GameResponse['gameData']['teams'];
  side: 'away' | 'home';
  boxscore: GameResponse['liveData']['boxscore'];
  isBattingStats: boolean;
};

const StatsData = ({
  teams,
  side,
  boxscore,
  isBattingStats,
}: StatsDataProps) => {
  const team = teams[side];
  const pitchers = boxscore.teams[side].pitchers;
  const players = boxscore.teams[side].players;

  const playersFiltered = isBattingStats
    ? Object.values(players)
        .filter((player) => player.battingOrder)
        .sort((a, b) => Number(a.battingOrder) - Number(b.battingOrder))
    : pitchers.map((id) => players[`ID${id}`]);

  const caption = isBattingStats
    ? `Individual Batting Stats for the ${team.clubName}`
    : `Individual Pitching Stats for the ${team.clubName}`;

  return (
    <section>
      <h4>{team.clubName}</h4>

      <div className="table-container">
        <table className="data-table">
          <caption className="sr-only">{caption}</caption>

          <thead className="table-head">
            <tr>
              <th scope="col" className="first-col-header">
                Player
              </th>
              {isBattingStats ? (
                <>
                  <th scope="col" className="score-col">
                    <abbr title="At-bats">AB</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Runs">R</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Hits">H</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Runs batted in">RBI</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Base on balls (walks)">BB</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Strikeouts">K</abbr>
                  </th>
                </>
              ) : (
                <>
                  <th scope="col" className="score-col">
                    <abbr title="Innings pitched">IP</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Hits allowed">H</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Runs allowed">R</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Earned runs">ER</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Base on balls (walk)">BB</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Strikeout">K</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Home runs allowed">HR</abbr>
                  </th>
                </>
              )}
            </tr>
          </thead>

          <tbody>
            {playersFiltered.map((player) => {
              const playerId = player.person.id;

              const {
                atBats = 0,
                baseOnBalls: battingBB = 0,
                hits: battingHits = 0,
                rbi = 0,
                runs: battingRuns = 0,
                strikeOuts: battingSO = 0,
              } = player.stats.batting;

              const {
                baseOnBalls: pitchingBB = 0,
                earnedRuns = 0,
                hits: pitchingHits = 0,
                runs: pitchingRuns = 0,
                strikeOuts: pitchingSO = 0,
                homeRuns = 0,
                inningsPitched = '0.0',
              } = player.stats.pitching;

              return (
                <tr key={playerId}>
                  <th scope="row" className="first-col">
                    {isBattingStats && !isStarter(player) && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        role="img"
                        aria-label="Substitution"
                        className="text-primary-900 inline-flex size-6"
                      >
                        <path d="M221.66,181.66l-48,48a8,8,0,0,1-11.32-11.32L196.69,184H72a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168H196.69l-34.35-34.34a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,221.66,181.66Z"></path>
                      </svg>
                    )}{' '}
                    {player.person.fullName}{' '}
                    <PlayerDetails
                      player={player}
                      shouldShowAllPositions={true}
                    />
                  </th>

                  {isBattingStats ? (
                    <>
                      <td className="score-col">{atBats}</td>
                      <td className="score-col">{battingRuns}</td>
                      <td className="score-col">{battingHits}</td>
                      <td className="score-col">{rbi}</td>
                      <td className="score-col">{battingBB}</td>
                      <td className="score-col">{battingSO}</td>
                    </>
                  ) : (
                    <>
                      <td className="score-col">{inningsPitched}</td>
                      <td className="score-col">{pitchingHits}</td>
                      <td className="score-col">{pitchingRuns}</td>
                      <td className="score-col">{earnedRuns}</td>
                      <td className="score-col">{pitchingBB}</td>
                      <td className="score-col">{pitchingSO}</td>
                      <td className="score-col">{homeRuns}</td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StatsData;
