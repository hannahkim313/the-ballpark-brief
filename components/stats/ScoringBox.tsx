import { GameResponse } from '@/types/statsAPI';

type ScoringBoxProps = {
  liveGameData: GameResponse;
  gameState: string | undefined;
};

const ScoringBox = ({ liveGameData, gameState }: ScoringBoxProps) => {
  const {
    gameData: { teams },
    liveData: { linescore },
  } = liveGameData;

  const awayTeam = teams.away;
  const homeTeam = teams.home;

  const innings = linescore.innings;
  const totalInnings = Math.max(9, linescore.innings.length);

  if (gameState !== 'Live' && gameState !== 'Final') {
    return (
      <div>
        <h3>Scoring Box</h3>
        <p>Box score will be available once the game begins.</p>
      </div>
    );
  }

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

        {/* TODO: Fetch and render API data */}
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
              <tr>
                <th scope="row" className="first-col">
                  Angels
                </th>
                {/* TODO: Dynamically add <td> to represent table value for each col of this row */}
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col border-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
              </tr>

              <tr>
                <th scope="row" className="first-col">
                  Mariners
                </th>
                {/* TODO: Dynamically add <td> to represent table value for each col of this row */}
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col border-col">0</td>
                <td className="score-col">0</td>
                <td className="score-col">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScoringBox;
