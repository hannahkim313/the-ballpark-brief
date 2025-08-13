import { ChevronDownIcon } from '@heroicons/react/24/outline';

const GameSelector = () => {
  const today = new Date();
  const maxDate = today.toLocaleDateString('en-CA');

  return (
    <section className="px-content py-content">
      <div className="content-container">
        <h2>Select a Game</h2>

        <form action="" className="flex flex-col">
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <div className="field flex-1/2">
              <label htmlFor="gameDate">Date of game:</label>
              <input
                type="date"
                id="gameDate"
                name="gameDate"
                defaultValue={maxDate}
                min="2020-03-30"
                max={maxDate}
                className="form-control"
              />
            </div>

            <div className="field flex-1/2">
              <label htmlFor="game">Game:</label>
              <div className="relative">
                <select
                  name="game"
                  id="game"
                  className="form-control w-full appearance-none pr-10"
                >
                  <option value="">Select a game</option>
                  {/* TODO: Replace options with dynamic values from API */}
                  <option value="firstGame">First game</option>
                  <option value="secondGame">Second game</option>
                  <option value="ThirdGame">Third game</option>
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
