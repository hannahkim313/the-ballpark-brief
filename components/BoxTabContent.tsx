const BoxTabContent = () => {
  return (
    <div>
      <h3>Scoring Box</h3>
      {/* TODO: Fetch and render API data */}
      <table>
        {/* TODO: Update team names with dynamic values */}
        <caption>Angels vs Mariners Inning-by-Inning Score</caption>
        <thead>
          <tr>
            <th scope="col">Team</th>
            <th scope="col">1</th>
            <th scope="col">2</th>
            <th scope="col">3</th>
            <th scope="col">4</th>
            <th scope="col">5</th>
            <th scope="col">6</th>
            <th scope="col">7</th>
            <th scope="col">8</th>
            <th scope="col">9</th>
            {/* TODO: Dynamically add extra cols if games goes into extra innings */}
            <th scope="col">R</th>
            <th scope="col">H</th>
            <th scope="col">E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Angels</th>
            {/* TODO: Dynamically add <td> to represent table value for each col of this row */}
          </tr>
          <tr>
            <th scope="row">Mariners</th>
            {/* TODO: Dynamically add <td> to represent table value for each col of this row */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoxTabContent;
