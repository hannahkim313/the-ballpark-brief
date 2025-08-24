'use client';

import { useEffect, useState } from 'react';
import { ScheduleResponse } from '@/types/statsAPI';
import Section from '@/components/ui/Section';
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
  const [pendingGame, setPendingGame] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  // TODO: track game data and implement to display in UI

  const { data, loading, error } = useStatsAPI<ScheduleResponse>(
    `schedule?sportId=1&date=${selectedDate}`
  );

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const handleGameChange = (game: string) => {
    setPendingGame(game);
  };

  const handleSubmit = () => {
    setSelectedGame(pendingGame);
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
    <div className="flex size-full flex-col">
      <GameSelector
        onDateChange={handleDateChange}
        gamesList={gamesList}
        selectedDate={selectedDate}
        today={today}
        onPendingGameChange={handleGameChange}
        pendingGame={pendingGame}
        onSubmit={handleSubmit}
      />

      {selectedGame ? (
        <>
          <GameOverview selectedGame={selectedGame} />
          <GameTabs selectedGame={selectedGame} />
        </>
      ) : (
        <Section className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="text-container">
            <h2>Nothing to Show Yet!</h2>
            <p className="lg:text-lg">
              Choose a date and game from the options above to see lineups,
              stats, and game information.
            </p>
          </div>
        </Section>
      )}
    </div>
  );
};

export default Page;
