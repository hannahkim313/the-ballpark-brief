const BattingStats = () => {
  return (
    <div>
      <h3>Batting Stats</h3>

      <div className="space-y-4">
        <section>
          <h4>Angels</h4>
          <div className="table-container">
            <table className="data-table">
              <caption className="sr-only">
                Individual Batting Stats for the Angels
              </caption>
              <thead className="table-head">
                <tr>
                  <th scope="col" className="first-col-header">
                    Player
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="At-bat">AB</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Run">R</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Hit">H</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Runs batted in">RBI</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Base on balls (walk)">BB</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Strikeout">K</abbr>
                  </th>
                  <th scope="col" className="score-col border-col">
                    <abbr title="Batting average">AVG</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="On-base plus slugging">OPS</abbr>
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
                  <td className="score-col border-col">0</td>
                  <td className="score-col">0</td>
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
                  <td className="score-col border-col">0</td>
                  <td className="score-col">0</td>
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
                Individual Batting Stats for the Angels
              </caption>
              <thead className="table-head">
                <tr>
                  <th scope="col" className="first-col-header">
                    Player
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="At-bat">AB</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Run">R</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Hit">H</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Runs batted in">RBI</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Base on balls (walk)">BB</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="Strikeout">K</abbr>
                  </th>
                  <th scope="col" className="score-col border-col">
                    <abbr title="Batting average">AVG</abbr>
                  </th>
                  <th scope="col" className="score-col">
                    <abbr title="On-base plus slugging">OPS</abbr>
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
                  <td className="score-col border-col">0</td>
                  <td className="score-col">0</td>
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
                  <td className="score-col border-col">0</td>
                  <td className="score-col">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BattingStats;
