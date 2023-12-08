

// Compound component: Header
function Header({ children }) {

  return (
    <header className="header">
      <div className="header__content">
        {children}
      </div>
    </header>
  );
}

// Compound component: Logo
function Logo({ src, alt, children }) {
  return (
    <div className="header__logo-container">
      <div className="header__logo-img-cont">
        <img src={src} alt={alt} className="header__logo-img" />
      </div>
      <span className="header__logo-sub">{children}</span>
    </div>
  );
}

// Compound component: Navigation
function Navigation({ links }) {
  return (
    <ul className="header__links">
      {links.map((link) => (
        <li className="header__link-wrapper" key={link.id}>
          <a href={link.url} className="header__link">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

// Compound component: HamburgerMenu
function HamburgerMenu({ isActive, onClick }) {
  return (
    <div className="header__main-ham-menu-cont" onClick={onClick}>
      <img
        src="./src/assets/img/ham-menu-close.svg"
        alt="hamburger menu"
        className={`header__main-ham-menu ${isActive ? '' : 'd-none'}`}
      />
      <img
        src="./src/assets/img/ham-menu.svg"
        alt="hamburger menu close"
        className={`header__main-ham-menu-close ${isActive ? 'd-none' : ''}`}
      />
    </div>
  );
}

// Compound component: SmallMenu
function SmallMenu({ isActive, links }) {
  return (
    <div className={`header__sm-menu ${isActive ? 'header__sm-menu--active' : ''}`}>
      <div className="header__sm-menu-content">
        <ul className="header__sm-menu-links">
          {links.map((link) => (
            <li className="header__sm-menu-link" key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Header, Logo, Navigation, HamburgerMenu, SmallMenu };