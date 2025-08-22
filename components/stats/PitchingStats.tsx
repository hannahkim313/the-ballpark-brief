const PitchingStats = () => {
  return (
    <div>
      <h3>Pitching Stats</h3>

      <div className="space-y-4">
        <section>
          <h4>Angels</h4>
          <div className="table-container">
            <table className="data-table">
              <caption className="sr-only">
                Individual Pitching Stats for the Angels
              </caption>
              <thead className="table-head">
                <tr>
                  <th scope="col" className="first-col-header">
                    Player
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Innings pitched">IP</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Hits allowed">H</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Runs allowed">R</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Earned runs">ER</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Base on balls (walk)">BB</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Strikeout">K</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Home runs allowed">HR</abbr>
                  </th>
                  <th scope="col" className="score-col border-col">
                    <abbr title="Earned run average">ERA</abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="first-col">
                    Player 1
                  </th>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col border-col">0</td>
                </tr>
                <tr>
                  <th scope="row" className="first-col">
                    A. Encarnacion-Strand
                  </th>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col border-col">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h4>Mariners</h4>
          <div className="table-container">
            <table className="data-table">
              <caption className="sr-only">
                Individual Pitching Stats for the Angels
              </caption>
              <thead className="table-head">
                <tr>
                  <th scope="col" className="first-col-header">
                    Player
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Innings pitched">IP</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Hits allowed">H</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Runs allowed">R</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Earned runs">ER</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Base on balls (walk)">BB</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Strikeout">K</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Home runs allowed">HR</abbr>
                  </th>
                  <th scope="col" className="score-col border-col">
                    <abbr title="Earned run average">ERA</abbr>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="first-col">
                    Player 1
                  </th>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col border-col">0</td>
                </tr>
                <tr>
                  <th scope="row" className="first-col">
                    A. Encarnacion-Strand
                  </th>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col">0</td>
                  <td className="score-col border-col">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PitchingStats;
