import { GameResponse } from '@/types/statsAPI';

type TeamRowProps = {
  teams: GameResponse['gameData']['teams'];
  side: 'away' | 'home';
  linescore: GameResponse['liveData']['linescore'];
  totalInnings: number;
  gameState: string | undefined;
};

const TeamRow = ({
  teams,
  side,
  linescore,
  totalInnings,
  gameState,
}: TeamRowProps) => {
  const team = teams[side];

  return (
    <tr>
      <th scope="row" className="first-col">
        {team.clubName}
      </th>

      {Array.from({ length: totalInnings }).map((_, index) => {
        const runs = linescore.innings[index]?.[side]?.runs;

        return (
          <td key={index} className="score-col">
            {runs === undefined && gameState !== 'Final' ? '' : runs}
            {runs === undefined && gameState === 'Final' && 'X'}
          </td>
        );
      })}

      <td className="score-col border-col">{linescore.teams[side].runs}</td>
      <td className="score-col">{linescore.teams[side].hits}</td>
      <td className="score-col">{linescore.teams[side].errors}</td>
    </tr>
  );
};

export default TeamRow;
