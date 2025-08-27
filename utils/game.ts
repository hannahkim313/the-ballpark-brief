import { GameResponse } from '@/types/statsAPI';

export const formatText = (value?: string): string => {
  if (!value) {
    return 'TBD';
  }

  return value;
};

export const formatUmpires = (
  umpires: GameResponse['liveData']['boxscore']['officials']
): string => {
  if (!umpires || umpires.length === 0) {
    return 'TBD';
  }

  const validUmpires = umpires.filter(
    (ump) => ump.official?.fullName && ump.officialType
  );

  if (validUmpires.length === 0) {
    return 'TBD';
  }

  return validUmpires
    .map(
      ({ official, officialType }) => `${official!.fullName} (${officialType})`
    )
    .join(', ');
};

export const formatWeather = (temp?: string, condition?: string): string => {
  if (!temp || !condition) {
    return 'TBD';
  }

  return `${temp} degrees, ${condition}`;
};

export const getLastPitchTime = (
  firstPitch?: string,
  durationMinutes?: number
): string | null => {
  if (!firstPitch || !durationMinutes) {
    return null;
  }

  const firstPitchDate = new Date(firstPitch);
  const lastPitchDate = new Date(
    firstPitchDate.getTime() + durationMinutes * 60000
  );

  return lastPitchDate.toISOString();
};

export const formatPitchTime = (
  venue: GameResponse['gameData']['venue'],
  time?: string | null
): string => {
  if (!time) {
    return 'TBD';
  }

  return new Date(time).toLocaleTimeString('en-us', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: venue.timeZone.id,
  });
};

export const formatGameTime = (durationMinutes?: number): string => {
  if (durationMinutes === undefined) {
    return 'TBD';
  }

  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  return `${hours}h ${minutes}m`;
};

export const formatGameDate = (date: string): string => {
  if (!date) {
    return 'TBD';
  }

  const localDate = new Date(`${date}T00:00:00`);

  return localDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
