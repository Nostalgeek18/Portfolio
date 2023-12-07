export default function Project1() {

    return (
        <>
            <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src="./assets/img/avatar.jpg"
              alt="Ram Maheshwari Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Jane Smith</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./index.html" className="header__link"> Home </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./index.html#projects" className="header__link">
                Projects
              </a>
            </li>
            
            <li className="header__link-wrapper">
              <a href="./index.html#about" className="header__link">About </a>
            </li>
            
            <li className="header__link-wrapper">
              <a href="./index.html#contact" className="header__link"> Contact </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>
            
             <li className="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

           
            <li className="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section className="project-cs-hero">
      <div className="project-cs-hero__content">
        <h1 className="heading-primary">Project 1</h1>
        <div className="project-cs-hero__info">
          <p className="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            in numquam incidunt earum quaerat cum fuga, atque similique natus
            nobis sit.
          </p>
        </div>
        <div className="project-cs-hero__cta">
          <a href="#" className="btn btn--bg" target="_blank">Live Link</a>
        </div>
      </div>
    </section>
    <section className="project-details">
      <div className="main-container">
        <div className="project-details__content">
          <div className="project-details__showcase-img-cont">
            <img
              src="./assets/img/quiz.jpg"
              alt="Project Image"
              className="project-details__showcase-img"
            />
          </div>
          <div className="project-details__content-main">
            <div className="project-details__desc">
              <h3 className="project-details__content-title">Project Overview</h3>
              <p className="project-details__desc-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                alias tenetur minus quaerat aliquid, aut provident blanditiis,
                deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                mollitia laborum corrupti ullam rem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Neque alias tenetur minus quaerat
                aliquid, aut provident blanditiis, deleniti aspernatur ipsam
                eaque veniam voluptatem corporis vitae mollitia laborum corrupti
                ullam rem?
              </p>
              <p className="project-details__desc-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                alias tenetur minus quaerat aliquid, aut provident blanditiis,
                deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                mollitia laborum corrupti ullam rem?
              </p>
            </div>
            <div className="project-details__tools-used">
              <h3 className="project-details__content-title">Tools Used</h3>
              <div className="skills">
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">Tailwind CSS</div>
                <div className="skills__skill">GIT</div>
                <div className="skills__skill">Jasmine</div>
                <div className="skills__skill">Wordpress</div>
                <div className="skills__skill">Google ADS</div>
                <div className="skills__skill">Facebook Ads</div>
                <div className="skills__skill">Android</div>
                <div className="skills__skill">IOS</div>
              </div>
            </div>
            <div className="project-details__links">
              <h3 className="project-details__content-title">See Live</h3>
              <a
                href="#"
                className="btn btn--med btn--theme project-details__links-btn"
                target="_blank"
                >Live Link</a
              >
              <a
                href="#"
                className="btn btn--med btn--theme-inv project-details__links-btn"
                target="_blank"
                >Code Link</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  className="main-footer__icon"
                  src="./assets/img/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  className="main-footer__icon"
                  src="./assets/img/github-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  className="main-footer__icon"
                  src="./assets/img/twitter-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  className="main-footer__icon"
                  src="./assets/img/yt-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  className="main-footer__icon main-footer__icon--mr-none"
                  src="./assets/img/insta-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Jane Smith</h4>
            <p className="main-footer__short-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
              tempora explicabo quae quod deserunt
            </p>
          </div>
        </div>
        
        </div>
        </footer>
        </>
    )
}