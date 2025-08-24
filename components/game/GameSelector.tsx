import { ChevronDownIcon } from '@heroicons/react/24/outline';

type GameSelectorProps = {
  onDateChange: (date: string) => void;
  gamesList: {
    gamePk: number;
    game: string;
  }[];
  selectedDate: string;
  today: string;
  onPendingGameChange: (game: string) => void;
  pendingGame: string | null;
  onSubmit: () => void;
};

const GameSelector = ({
  onDateChange,
  gamesList,
  selectedDate,
  today,
  onPendingGameChange,
  pendingGame,
  onSubmit,
}: GameSelectorProps) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(e.target.value);
  };

  const handleDateBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const enteredDate = e.target.value;
    const minDate = '2023-03-30';

    if (enteredDate < minDate) {
      onDateChange(minDate);
    } else if (enteredDate > today) {
      onDateChange(today);
    } else {
      onDateChange(enteredDate);
    }
  };

  const handlePendingGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onPendingGameChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className="px-content py-content">
      <div className="content-container">
        <h2>Select a Game</h2>

        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <div className="field flex-1/3">
              <label htmlFor="gameDate">Date of game:</label>
              <input
                type="date"
                id="gameDate"
                name="gameDate"
                value={selectedDate}
                min="2023-03-30"
                max={today}
                onChange={handleDateChange}
                onBlur={handleDateBlur}
                className="form-control"
              />
            </div>

            <div className="field flex-2/3">
              <label htmlFor="game">Game:</label>
              <div className="relative">
                <select
                  name="game"
                  id="game"
                  value={pendingGame ?? ''}
                  onChange={handlePendingGameChange}
                  className="form-control w-full appearance-none pr-10"
                >
                  <option value="">-- Select a game --</option>
                  {gamesList?.map(({ gamePk, game }) => (
                    <option key={gamePk} value={gamePk}>
                      {game}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="text-primary-900 pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary mt-8 md:w-fit">
            View Game Data
          </button>
        </form>
      </div>
    </section>
  );
};

export default GameSelector;
