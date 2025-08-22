'use client';

import { useEffect, useState } from 'react';
import { ScheduleResponse } from '@/types/statsAPI';
import CenterMessage from '@/components/ui/CenterMessage';
import GameSelector from '@/components/game/GameSelector';
import GameOverview from '@/components/game/GameOverview';
import GameTabs from '@/components/game/tabs/GameTabs';
import useStatsAPI from '@/hooks/useStatsAPI';

type GamesList = {
  gamePk: number;
  game: string;
}[];

const Page = () => {
  const today = new Date().toLocaleDateString('en-CA');

  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [gamesList, setGamesList] = useState<GamesList>([]);
  // TODO: track selected game
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const { data, loading, error } = useStatsAPI<ScheduleResponse>(
    `schedule?sportId=1&date=${selectedDate}`
  );

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    const todaysGames = data.dates?.[0]?.games ?? [];

    if (todaysGames.length === 0) {
      return;
    }

    const gamesList = todaysGames.map(({ gamePk, teams }) => {
      const { away, home } = teams;

      return {
        gamePk,
        game: `${away.team.name} vs. ${home.team.name}`,
      };
    });

    setGamesList(gamesList);
  }, [data]);

  if (loading) {
    return <CenterMessage>Loading...</CenterMessage>;
  }

  if (error) {
    return <CenterMessage>{error}</CenterMessage>;
  }

  return (
    <div>
      <GameSelector
        onDateChange={handleDateChange}
        gamesList={gamesList}
        selectedDate={selectedDate}
        today={today}
      />
      <GameOverview />
      <GameTabs />
    </div>
  );
};

export default Page;
