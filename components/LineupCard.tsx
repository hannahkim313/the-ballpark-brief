const LineupCard = () => {
  return (
    <article className="data-card flex-1/2 p-0">
      <div className="border-b-1 border-stone-300 p-4 text-center">
        <h4 className="mb-0 font-bold md:text-xl">Seattle Mariners</h4>
        <p className="text-subtle">
          <abbr title="Team's number of wins vs. number of losses">
            (55 - 49)
          </abbr>
        </p>
      </div>

      <div className="space-y-3 p-4 md:space-y-4">
        <div className="text-center">
          <h5 className="mb-0 font-semibold">Pitcher</h5>
          <p className="font-bold md:text-lg">George Kirby</p>

          <p className="text-subtle">
            <abbr title="Right-hand pitcher">RHP</abbr> |{' '}
            <abbr title="Uniform number">#68</abbr>
          </p>

          <p className="text-subtle">
            <abbr title="Pitcher's number of wins vs. number of losses">
              4-5
            </abbr>
            ,{' '}
            <span>
              4.65 <abbr title="Earned run average">ERA</abbr>
            </span>
            ,{' '}
            <span>
              59 <abbr title="Strikeouts">SO</abbr>
            </span>
          </p>
        </div>

        <div>
          <h5>Batters</h5>
          <ol className="list-inside list-decimal">
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
            <li className="font-semibold">
              J.P. Crawford{' '}
              <abbr title="Left-handed batter" className="text-subtle">
                (L)
              </abbr>{' '}
              <abbr title="Position: Shortstop" className="text-subtle">
                SS
              </abbr>{' '}
              <abbr title="Uniform number" className="text-subtle">
                #3
              </abbr>
            </li>
          </ol>
        </div>
      </div>
    </article>
  );
};

export default LineupCard;
