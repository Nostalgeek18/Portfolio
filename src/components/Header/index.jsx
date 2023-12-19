
import { useContext, useState } from 'react';
import { AppContext } from '../../App'
import { LanguageSwitch } from '../atoms/LanguageSwitch';
import { getUserInfos } from '../../tools/mix.ts'
import * as styled from './style'

// Compound component: Header
export default function Header() {

  const headerLinks = [
    { id: 1, anchor: '/#home', text: 'home' },
    { id: 2, anchor: '/#projects', text: 'projects' },
    { id: 3, anchor: '/#about', text: 'about' },
    { id: 4, anchor: '/#contact', text: 'contact' },
  ];
  
  const { t, switchLanguage } = useContext(AppContext) 

  const [smallMenuActive, setSmallMenuActive] = useState(false)

  function toggleSmallMenu() {
    setSmallMenuActive(oldValue => !oldValue)
  }

  const { name, avatar} = getUserInfos();

  return (
      <styled.Header>
        <styled.HeaderContent>
          <Logo 
              src={avatar}
              alt={`${name} avatar`}>
                {name}
              </Logo> 
                {/* Desktop menu */}
            <styled.NavigationUL>
                <NavigationLink linkData={headerLinks[0]}> {t(`header.${headerLinks[0].text}`)} </NavigationLink>
                <NavigationLink linkData={headerLinks[1]}> {t(`header.${headerLinks[1].text}`)} </NavigationLink>
                <NavigationLink linkData={headerLinks[2]}> {t(`header.${headerLinks[2].text}`)} </NavigationLink>
                <NavigationLink linkData={headerLinks[3]}> {t(`header.${headerLinks[3].text}`)} </NavigationLink>
                <LanguageSwitch transform={true} onClick={switchLanguage}></LanguageSwitch>
            </styled.NavigationUL>
                {/* Mobile menu */}
            <HamburgerMenu toggleSmallMenu={toggleSmallMenu} smallMenuActive={smallMenuActive} onClick={switchLanguage} />
            <SmallMenu smallMenuActive={smallMenuActive} links={headerLinks} t={t} switchLanguage={switchLanguage}>
                <LanguageSwitch transform={false}></LanguageSwitch>
            </SmallMenu>
        </styled.HeaderContent>
      </styled.Header>
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

function NavigationLink({ linkData, children }) {
  
  return (
    <styled.LinkWrapper key={linkData.id}>
      <styled.HeaderLink to={linkData.anchor}>
        {children}
      </styled.HeaderLink>
    </styled.LinkWrapper>
  );
}

// Compound component: HamburgerMenu
function HamburgerMenu({ smallMenuActive, toggleSmallMenu }) {
  return (
    <div className="header__main-ham-menu-cont" onClick={toggleSmallMenu}>
      {smallMenuActive ? (
          <img
            src="/assets/img/ham-menu-close.svg"
            alt="hamburger menu"
            className={`header__main-ham-menu d-none}`}
          /> ) : (
        <img
          src="/assets/img/ham-menu.svg"
          alt="hamburger menu close"
          className={`header__main-ham-menu-close d-none}`}
        />
      )}
    </div>
  );
}

function SmallMenu({ smallMenuActive, links, t, children, switchLanguage }) {
    return (
      <styled.SmallMenuWrapper smallMenuActive={smallMenuActive}>
        <styled.SmallMenuContent>
          <styled.SmallMenuLinks>
            {links.map((link) => (
              <styled.SmallMenuLink key={link.id}>
                <styled.HeaderLink to={link.anchor}>{t(`header.${link.text}`)}</styled.HeaderLink>
              </styled.SmallMenuLink>
            ))}
            <styled.SmallMenuLink>
                <styled.HeaderLink onClick={switchLanguage}>{children}</styled.HeaderLink>
            </styled.SmallMenuLink>
          </styled.SmallMenuLinks>
        </styled.SmallMenuContent>
      </styled.SmallMenuWrapper>
    );
  }
