import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  // ---
// const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
// const smallMenu = document.querySelector('.header__sm-menu')
// const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
// const headerHamMenuCloseBtn = document.querySelector(
//   '.header__main-ham-menu-close'
// )
// const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

// hamMenuBtn.addEventListener('click', () => {
//   smallMenu.classList.add('header__sm-menu--active')
//   if (smallMenu.classList.contains('header__sm-menu--active')) {
//     smallMenu.classList.remove('header__sm-menu--active')
//   } else {
//     smallMenu.classList.add('header__sm-menu--active')
//   }
//   if (headerHamMenuBtn.classList.contains('d-none')) {
//     headerHamMenuBtn.classList.remove('d-none')
//     headerHamMenuCloseBtn.classList.add('d-none')
//   } else {
//     headerHamMenuBtn.classList.add('d-none')
//     headerHamMenuCloseBtn.classList.remove('d-none')
//   }
// })

// for (let i = 0; i < headerSmallMenuLinks.length; i++) {
//   headerSmallMenuLinks[i].addEventListener('click', () => {
//     smallMenu.classList.remove('header__sm-menu--active')
//     headerHamMenuBtn.classList.remove('d-none')
//     headerHamMenuCloseBtn.classList.add('d-none')
//   })
// }

// // ---
// const headerLogoConatiner = document.querySelector('.header__logo-container')

// headerLogoConatiner.addEventListener('click', () => {
//   location.href = 'index.html'
// })


  return (
    <>
      <Header />
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey, My name is Jane Smith</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            I am a passionate frontend developer based in London, UK. My specialities are <strong>React JS</strong> and <strong>Tailwind CSS</strong>, and I love building apps that are delightful to use.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">See my projects</a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/nazim-mouza%C3%AF-647a29211/" className="home-hero__social-icon-link">
            <img
              src="./src/assets/img/linkedin.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="#" className="home-hero__social-icon-link">
            <img
              src="./src/assets/img/github-icon.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>

      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
    
    
        <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Some of my perssonal projects, including links to the code and live version. Click the button to learn more about each one.
          </span>
        </h2>

        <div className="projects__content">
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="./src/assets/img/quizzImg.png"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Quiz App</h3>
              <p className="projects__row-content-desc">
                Quizzie is a simple quiz app that lets you select alternatives and then gives you a score. It's built with functional React components. 
              </p>
              <a
                href="./project-1.html"
                className="btn btn--med btn--theme dynamicBgClr"
                >Learn more</a
              >
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="./src/assets/img/basicSite.png"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Basic site</h3>
              <p className="projects__row-content-desc">
                A Chrome Extension that gives you an overview over the current time, how the weather is like and how Dogecoin is performing. Interacts with multiple APIs using async JS.
              </p>
              <a
                href="./project-2.html"
                className="btn btn--med btn--theme dynamicBgClr"
                >Learn more</a
              >
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="./src/assets/img/passwordGenerator.png"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Password Generator</h3>
              <p className="projects__row-content-desc">
                An app that generates random passwords based on a few user inputs, 
                e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript.
              </p>
              <a
                href="./project-3.html"
                className="btn btn--med btn--theme dynamicBgClr"
                >Learn more</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            <p>I'm a frontend developer based out of London, UK. I love building apps that solve real-world problems, and that are delightful to use. My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.
            </p>
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                My background is in teaching and marketing. I have a bachelors degree in English from Kings College. When I'm not coding, I take care of my five adorable cats.
              </p>
            </div>
            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr"
              >Contact</a
            >
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">TypeScript</div>
              <div className="skills__skill">Git</div>
              <div className="skills__skill">Figma</div>
              <div className="skills__skill">Tailwind CSS</div>
              <div className="skills__skill">Jasmine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    

    
    
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. Send me an email at jane@example.com or call me directly at +123456789
          </span>
        </h2>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default App
