
function About({children}) {
    return (
        <section id="about" className="about sec-pad">
            <div className="main-container">
             {children}
            </div>
        </section>
    )
}

function ContentTitle({children}) {
    return (
        <h3 className="about__content-title">{children}</h3>
    )
}


function Content({children}) {
    return (
        <div className="about__content">
            {children}
        </div>
    )
}

function ContactDetails({children}) {
    return (
        <p className="about__content-details-para">
         {children}
        </p>
    )
}

function ContactCTA({hrefContact, children}) {
    return (
        <a href={hrefContact} className="btn btn--med btn--theme dynamicBgClr">
            {children}
        </a>
    )
}

function ContentSkills({children}) {
    return (
        <div className="about__content-skills">
            {children}
         </div>
    )
}

function TitleSkills({children}) {
    return (
        <h3 className="about__content-title">{children}</h3>
    )
}

function SkillsWrapper({children}) {
    return (
        <div className="skills">
            {children}
        </div>
    )
}

function Skill({children}) {
    return (
        <div className="skills__skill">
            {children}
        </div>
    )
}

function Heading({children}) {
    return (
        <h2 className="heading heading-sec heading-sec__mb-med">
            {children}
        </h2>
    )
}

function MainTitle({children}) {
    return (
        <span className="heading-sec__main">{children}</span>
    )
}

function MainContent({children}) {
    return (
        <div className="about__content-main">
            {children}
        </div>
    )
}

function MainDescription({children}) {
    return (
        <span className="heading-sec__sub">
        <p>
            {children}
        </p>
    </span>
    )
}

About.ContentTitle    = ContentTitle
About.Content         = Content
About.ContactDetails  = ContactDetails
About.ContactCTA      = ContactCTA
About.TitleSkills     = TitleSkills
About.ContentSkills   = ContentSkills
About.SkillsWrapper   = SkillsWrapper
About.Skill           = Skill 
About.Heading         = Heading 
About.MainContent     = MainContent 
About.MainDescription = MainDescription
About.MainTitle       = MainTitle

export { About } 