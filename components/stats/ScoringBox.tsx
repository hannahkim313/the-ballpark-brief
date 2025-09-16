import { GameResponse } from '@/types/statsAPI';
import TeamRow from './TeamRow';

type ScoringBoxProps = {
  liveGameData: GameResponse;
  gameState: string | undefined;
};

const ScoringBox = ({ liveGameData, gameState }: ScoringBoxProps) => {
  if (gameState !== 'Live' && gameState !== 'Final') {
    return (
      <div>
        <h3>Scoring Box</h3>
        <p>Box score will be available once the game begins.</p>
      </div>
    );
  }

  const {
    gameData: { teams },
    liveData: { linescore },
  } = liveGameData;

  const awayTeam = teams.away;
  const homeTeam = teams.home;

  const innings = linescore.innings;
  const totalInnings = Math.max(9, linescore.innings.length);

  return (
    <div>
      <h3>Scoring Box</h3>

      <div className="flex flex-col gap-3 md:gap-4">
        <p className="flex items-center justify-center gap-8 font-bold">
          <span>{awayTeam.clubName}</span>
          <span className="text-xl md:text-2xl">
            {linescore.teams.away.runs} - {linescore.teams.home.runs}
          </span>
          <span>{homeTeam.clubName}</span>
        </p>

        <div className="table-container">
          <table className="data-table">
            <caption className="sr-only">
              {awayTeam.clubName} vs. {homeTeam.clubName} Inning-by-Inning Score
            </caption>

            <thead className="table-head">
              <tr>
                <th scope="col" className="first-col-header">
                  Team
                </th>

                {Array.from({ length: totalInnings }).map((_, index) => {
                  const inning = innings[index];

                  return (
                    <th key={index} scope="col" className="score-col">
                      {inning ? inning.num : index + 1}
                    </th>
                  );
                })}

                <th scope="col" className="score-col border-col">
                  <abbr title="Runs">R</abbr>
                </th>
                <th scope="col" className="score-col">
                  <abbr title="Hits">H</abbr>
                </th>
                <th scope="col" className="score-col">
                  <abbr title="Errors">E</abbr>
                </th>
              </tr>
            </thead>

            <tbody>
              <TeamRow
                teams={teams}
                side={'away'}
                linescore={linescore}
                totalInnings={totalInnings}
                gameState={gameState}
              />
              <TeamRow
                teams={teams}
                side={'home'}
                linescore={linescore}
                totalInnings={totalInnings}
                gameState={gameState}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScoringBox;
