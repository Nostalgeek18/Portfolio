export default function Project1() {

    return (
        <>
            <header class="header">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src="./assets/img/avatar.jpg"
              alt="Ram Maheshwari Logo Image"
              class="header__logo-img"
            />
          </div>
          <span class="header__logo-sub">Jane Smith</span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="./index.html" class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#projects" class="header__link">
                Projects
              </a>
            </li>
            
            <li class="header__link-wrapper">
              <a href="./index.html#about" class="header__link">About </a>
            </li>
            
            <li class="header__link-wrapper">
              <a href="./index.html#contact" class="header__link"> Contact </a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              class="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              class="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>
            
             <li class="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

           
            <li class="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="project-cs-hero">
      <div class="project-cs-hero__content">
        <h1 class="heading-primary">Project 1</h1>
        <div class="project-cs-hero__info">
          <p class="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            in numquam incidunt earum quaerat cum fuga, atque similique natus
            nobis sit.
          </p>
        </div>
        <div class="project-cs-hero__cta">
          <a href="#" class="btn btn--bg" target="_blank">Live Link</a>
        </div>
      </div>
    </section>
    <section class="project-details">
      <div class="main-container">
        <div class="project-details__content">
          <div class="project-details__showcase-img-cont">
            <img
              src="./assets/img/quiz.jpg"
              alt="Project Image"
              class="project-details__showcase-img"
            />
          </div>
          <div class="project-details__content-main">
            <div class="project-details__desc">
              <h3 class="project-details__content-title">Project Overview</h3>
              <p class="project-details__desc-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                alias tenetur minus quaerat aliquid, aut provident blanditiis,
                deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                mollitia laborum corrupti ullam rem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Neque alias tenetur minus quaerat
                aliquid, aut provident blanditiis, deleniti aspernatur ipsam
                eaque veniam voluptatem corporis vitae mollitia laborum corrupti
                ullam rem?
              </p>
              <p class="project-details__desc-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                alias tenetur minus quaerat aliquid, aut provident blanditiis,
                deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                mollitia laborum corrupti ullam rem?
              </p>
            </div>
            <div class="project-details__tools-used">
              <h3 class="project-details__content-title">Tools Used</h3>
              <div class="skills">
                <div class="skills__skill">HTML</div>
                <div class="skills__skill">CSS</div>
                <div class="skills__skill">JavaScript</div>
                <div class="skills__skill">React</div>
                <div class="skills__skill">Tailwind CSS</div>
                <div class="skills__skill">GIT</div>
                <div class="skills__skill">Jasmine</div>
                <div class="skills__skill">Wordpress</div>
                <div class="skills__skill">Google ADS</div>
                <div class="skills__skill">Facebook Ads</div>
                <div class="skills__skill">Android</div>
                <div class="skills__skill">IOS</div>
              </div>
            </div>
            <div class="project-details__links">
              <h3 class="project-details__content-title">See Live</h3>
              <a
                href="#"
                class="btn btn--med btn--theme project-details__links-btn"
                target="_blank"
                >Live Link</a
              >
              <a
                href="#"
                class="btn btn--med btn--theme-inv project-details__links-btn"
                target="_blank"
                >Code Link</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/img/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/img/github-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/img/twitter-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon"
                  src="./assets/img/yt-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src="./assets/img/insta-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Jane Smith</h4>
            <p class="main-footer__short-desc">
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