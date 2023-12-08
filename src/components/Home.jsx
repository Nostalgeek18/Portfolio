export default function Home() {
    return  (
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
    )
}