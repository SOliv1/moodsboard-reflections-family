import { NavLink } from 'react-router-dom';

const menuItems = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/moodsboard-cinematic', 'Cinematic'],
  ['/moodsboard-intro', 'Intro'],
  ['/moodsboard-typography', 'Typography'],
];

function MiniMenu() {
  return (
    <nav className="cinematic-mini-menu" aria-label="Main navigation">
      {menuItems.map(([to, label]) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default MiniMenu;
