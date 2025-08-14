const GeneralTabContent = () => {
  return (
    <div>
      <h3>General Information</h3>

      <div className="data-card">
        {/* TODO: Fetch and render API data */}
        <p>
          <span className="font-bold">Umpires:</span>
        </p>
        <p>
          <span className="font-bold">Weather:</span>
        </p>
        <p>
          <span className="font-bold">Wind:</span>
        </p>
        <p>
          <span className="font-bold">Venue:</span>
        </p>
        <p>
          <span className="font-bold">First pitch:</span>
        </p>
        <p>
          <span className="font-bold">Last pitch:</span>
        </p>
        <p>
          <span className="font-bold">Time:</span>
        </p>
      </div>
    </div>
  );
};

export default GeneralTabContent;
