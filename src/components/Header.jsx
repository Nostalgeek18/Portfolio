
import { useContext, useState } from 'react';
import { AppContext } from '../App';
import { LanguageSwitch } from './atoms/LanguageSwitch';
import { Link } from 'react-router-dom';
import { getUserInfos } from '../tools/mix.ts'

// Compound component: Header
function Header({ headerLinks }) {

  const { t, switchLanguage } = useContext(AppContext) 

  const [smallMenuActive, setSmallMenuActive] = useState(false)

  function toggleSmallMenu() {
    setSmallMenuActive(oldValue => !oldValue)
  }

  const { name, avatar} = getUserInfos();

  return (
      <header className="header">
        <div className="header__content">
          <Logo 
              src={avatar}
              alt={`${name} avatar`}>
                {name}
              </Logo> 
            <Navigation>
                <NavigationLink linkData={headerLinks[0]}> {t(`header.${headerLinks[0].text}`)} </NavigationLink>
                <NavigationLink linkData={headerLinks[1]}> {t(`header.${headerLinks[1].text}`)} </NavigationLink>
                <NavigationLink linkData={headerLinks[2]}> {t(`header.${headerLinks[2].text}`)} </NavigationLink>
                <NavigationLink linkData={headerLinks[3]}> {t(`header.${headerLinks[3].text}`)} </NavigationLink>
                <LanguageSwitch onClick={switchLanguage}></LanguageSwitch>
            </Navigation>
            <HamburgerMenu toggleSmallMenu={toggleSmallMenu} smallMenuActive={smallMenuActive} onClick={switchLanguage} />
            <SmallMenu smallMenuActive={smallMenuActive} links={headerLinks} t={t} />
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
function Navigation({children }) {
  return (
    <ul className="header__links">
      {children}
    </ul>
  );
}

function NavigationLink({ linkData, children }) {
  
  return (
    <li className="header__link-wrapper" key={linkData.id}>
      <Link to={linkData.anchor} className="header__link">
        {children}
      </Link>
    </li>
  );
}

// Compound component: HamburgerMenu
function HamburgerMenu({ smallMenuActive, toggleSmallMenu }) {
  return (
    <div className="header__main-ham-menu-cont" onClick={toggleSmallMenu}>
      {smallMenuActive &&
          <img
            src="/assets/img/ham-menu-close.svg"
            alt="hamburger menu"
            className={`header__main-ham-menu d-none}`}
          /> ||
        <img
          src="/assets/img/ham-menu.svg"
          alt="hamburger menu close"
          className={`header__main-ham-menu-close d-none}`}
        />
      }
    </div>
  );
}

// Compound component: SmallMenu (for mobile)
function SmallMenu({ smallMenuActive, links, t }) {
  return (
    <div className={`header__sm-menu ${smallMenuActive ? 'header__sm-menu--active' : ''}`}>
      <div className="header__sm-menu-content">
        <ul className="header__sm-menu-links">
          {links.map((link) => (
            <li className="header__sm-menu-link" key={link.id}>
              <Link to={link.anchor}>{t(`header.${link.text}`)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Header, Logo, Navigation, NavigationLink,  HamburgerMenu, SmallMenu };