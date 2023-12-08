//Components to store ALL single Projects
import Project from "./Project"

export default function Projects () {

    return (
        <section id="projects" className="projects sec-pad">
        <div className="main-container">
            <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projects</span>
            <span className="heading-sec__sub">
                Some of my perssonal projects, including links to the code and live version. Click the button to learn more about each one.
            </span>
            </h2>

            <div className="projects__content">
            <Project 
                title="Quiz App"
                description="Quizzie is a simple quiz app that lets you select alternatives and then gives you a score. It's built with functional React components."
                hrefLink="./project-1.html"
                srcImg="./src/assets/img/quizzImg.png"
            />

            <Project 
                title="Basic site"
                description="A Chrome Extension that gives you an overview over the current time, how the weather is like and how Dogecoin is performing. Interacts with multiple APIs using async JS."
                hrefLink="./project-2.html"
                srcImg="./src/assets/img/basicSite.png"
            />
            <Project 
                title="Password Generator"
                description="An app that generates random passwords based on a few user inputs, 
                e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript."
                hrefLink="./project-3.html"
                srcImg="./src/assets/img/passwordGenerator.png"
            />
            </div>
        </div>
        </section>
    )
}