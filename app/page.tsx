'use client';

import { useEffect, useState } from 'react';
import { GameResponse, ScheduleResponse } from '@/types/statsAPI';
import Section from '@/components/ui/Section';
import CenterMessage from '@/components/ui/CenterMessage';
import GameSelector from '@/components/game/GameSelector';
import GameOverview from '@/components/game/GameOverview';
import GameTabs from '@/components/game/tabs/GameTabs';
import useStatsAPI from '@/hooks/useStatsAPI';
import { getPollInterval } from '@/utils/game';

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
  const [gameState, setGameState] = useState<string | undefined>(undefined);

  const pollInterval = getPollInterval(gameState);

  const {
    data: scheduleData,
    loading: scheduleLoading,
    error: scheduleError,
  } = useStatsAPI<ScheduleResponse>(
    `v1/schedule?sportId=1&date=${selectedDate}`
  );

  const {
    data: liveData,
    loading: gameLoading,
    error: gameError,
  } = useStatsAPI<GameResponse>(
    selectedGame ? `v1.1/game/${selectedGame}/feed/live` : null,
    { pollInterval }
  );

  // TODO: remove console log when finished implementing
  console.log(liveData);
  console.log(pollInterval);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    setPendingGame(null);
    setSelectedGame(null);
  };

  const handleGameChange = (game: string) => {
    setPendingGame(game);
  };

  const handleGameSubmit = () => {
    setSelectedGame(pendingGame);
  };

  useEffect(() => {
    if (!scheduleData) {
      return;
    }

    const todaysGames = scheduleData.dates?.[0]?.games ?? [];

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
  }, [scheduleData]);

  useEffect(() => {
    if (liveData) {
      setGameState(liveData.gameData.status.abstractGameState);
    } else {
      setGameState('Preview');
    }

    return;
  }, [liveData]);

  if (scheduleLoading || gameLoading) {
    return <CenterMessage>Loading...</CenterMessage>;
  }

  if (scheduleError || gameError) {
    return <CenterMessage>{scheduleError || gameError}</CenterMessage>;
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
        onSubmit={handleGameSubmit}
      />

      {selectedGame && liveData ? (
        <>
          <GameOverview liveGameData={liveData} />
          <GameTabs liveGameData={liveData} />
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
