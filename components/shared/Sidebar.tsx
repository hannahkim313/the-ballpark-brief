import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside aria-label="Sidebar navigation">
      <nav>
        <ul>
          <Link href="/">Home</Link>
        </ul>
        <ul>
          <Link href="/lineup">Lineup</Link>
        </ul>
        <ul>
          <Link href="/stats">Stats</Link>
        </ul>
        <ul>
          <Link href="/schedule">Schedule</Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
