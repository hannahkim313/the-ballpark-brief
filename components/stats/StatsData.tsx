import { GameResponse } from '@/types/statsAPI';
import PlayerDetails from './PlayerDetails';
import { isStarter } from '@/utils/game';

type StatsDataProps = {
  teams: GameResponse['gameData']['teams'];
  side: 'away' | 'home';
  boxscore: GameResponse['liveData']['boxscore'];
};

const StatsData = ({ teams, side, boxscore }: StatsDataProps) => {
  const team = teams[side];

  const players = Object.values(boxscore.teams[side].players)
    .filter((player) => player.battingOrder)
    .sort((a, b) => Number(a.battingOrder) - Number(b.battingOrder));

  return (
    <section>
      <h4>{team.clubName}</h4>

      <div className="table-container">
        <table className="data-table">
          <caption className="sr-only">
            Individual Batting Stats for the {team.clubName}
          </caption>

          <thead className="table-head">
            <tr>
              <th scope="col" className="first-col-header">
                Player
              </th>
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
            </tr>
          </thead>

          <tbody>
            {players.map((player) => {
              const playerId = player.person.id;

              const {
                atBats = 0,
                baseOnBalls = 0,
                hits = 0,
                rbi = 0,
                runs = 0,
                strikeOuts = 0,
              } = player.stats.batting;

              return (
                <tr key={playerId}>
                  <th scope="row" className="first-col">
                    {!isStarter(player) && (
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

                  <td className="score-col">{atBats}</td>
                  <td className="score-col">{runs}</td>
                  <td className="score-col">{hits}</td>
                  <td className="score-col">{rbi}</td>
                  <td className="score-col">{baseOnBalls}</td>
                  <td className="score-col">{strikeOuts}</td>
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
