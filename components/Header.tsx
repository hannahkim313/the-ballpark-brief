const Header = () => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const today = new Date();
  const todaysFullDate = today.toLocaleDateString(undefined, dateOptions);

  return (
    <header className="px-content py-content">
      <h1>The Ballpark Brief: Game Insights, Lineups & More</h1>
      <p>{todaysFullDate}</p>
    </header>
  );
};

export default Header;
