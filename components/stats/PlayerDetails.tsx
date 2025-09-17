import { Batter } from '@/types/statsAPI';

type PlayerDetailsProps = {
  player: Batter;
  shouldShowAllPositions: boolean;
};

const PlayerDetails = ({
  player,
  shouldShowAllPositions,
}: PlayerDetailsProps) => {
  const positions =
    player.allPositions && player.allPositions.length > 0
      ? player.allPositions
      : [player.position];

  const positionAbbr = shouldShowAllPositions
    ? positions.map((position) => position.abbreviation).join('-')
    : positions[0].abbreviation;

  const positionName = shouldShowAllPositions
    ? positions.map((position) => position.name).join(', ')
    : positions[0].name;

  return (
    <>
      <abbr title={`Position: ${positionName}`} className="text-subtle">
        {positionAbbr}
      </abbr>{' '}
      <abbr title="Uniform number" className="text-subtle">
        {`#${player.jerseyNumber}`}
      </abbr>
    </>
  );
};

export default PlayerDetails;
