 function Home({children}) {
  return  (
    <section className="home-hero">
     {children}
    </section>
  )
}

function HomeTitle({children}) {
  return (
    <h1 className="heading-primary">{children}</h1>
  )
}

function HomeHeroInfo({children}) {
  return (
    <div className="home-hero__info">
    <p className="text-primary">
      {children}
    </p>
  </div>
  )
}

function HomeContent({children}) {
  return (
    <div className="home-hero__content">
      {children}
    </div>
  )
}

function HomeCta({hrefLink, children}) {
  return (
    <div className="home-hero__cta">
      <a href={hrefLink} className="btn btn--bg">{children}</a>
    </div>
  )
}

function HomeBottomWidget() {
  return (
     <div className="home-hero__mouse-scroll-cont">
       <div className="mouse"></div>
     </div>
  )
}

function HeroSocials({children}) {
  return (
    <div className="home-hero__socials">
      {children}
    </div>
  )
}

function HeroSocial({social}) {
  return (
      <div className="home-hero__social">
      <a href={social.link} className="home-hero__social-icon-link" target="_blank">
        <img
          src={social.srcIcon}
          alt="icon"
          className="home-hero__social-icon"
        />
      </a>
    </div>
  )
}

export { Home, HeroSocials, HeroSocial, HomeCta, HomeContent, HomeBottomWidget, HomeTitle, HomeHeroInfo }