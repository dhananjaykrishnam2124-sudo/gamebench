const links = [
  { to: "/", label: "Home" },
  { to: "/my-system", label: "My System" },
  { to: "/about", label: "About Us" },
];

export default function Header({ route }) {
  const isCurrent = (to) =>
    to === "/" ? route === "/" || route.startsWith("/game/") : route === to;

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* The logo opens its own Gamebench information page, not Home or About */}
        <a
          className="logo"
          href="#/gamebench"
          aria-label="Gamebench, about this site"
          aria-current={route === "/gamebench" ? "page" : undefined}
        >
          Gamebench
        </a>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {links.map(({ to, label }) => (
              <li key={to}>
                <a
                  className="nav-link"
                  href={`#${to}`}
                  aria-current={isCurrent(to) ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
