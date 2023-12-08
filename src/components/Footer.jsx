function Footer ({children}) {

    return (
        <footer className="main-footer">
         <div className="main-container">
            <div className="main-footer__upper">
                {children}
            </div>

        </div>
    </footer>
    )
}

function FooterSocials({children}) {
    return (
        <div className="main-footer__row main-footer__row-1">
            {children}
        </div>
    )
}

function FooterInfos({children}) {
    return (
        <div className="main-footer__row main-footer__row-2">
         {children}
    </div>
    )
}

function TitleInfos({children}) {
    return (
        <h4 className="heading heading-sm text-lt">{children}</h4>
    )
}

function DescriptionInfos({children}) {
    return (
        <p className="main-footer__short-desc">
            {children}
        </p>
    )
}

function SocialInfos({children}) {
    return (
        <h2 className="heading heading-sm main-footer__heading-sm">
        <span>{children}</span>
        </h2>
    )
}

function SocialsWrapper({children}) {
    return (
        <div className="main-footer__social-cont">
            {children}
        </div>
    )
}

function SocialLink({social}) {
    return (
        <a target="_blank" rel="noreferrer" href={social.link}>
            <img
            className="main-footer__icon"
            src={social.srcIcon}
            alt="icon"
            />
    </a>
    )
}

export { Footer, FooterSocials, FooterInfos, SocialLink, TitleInfos , DescriptionInfos, SocialInfos, SocialsWrapper}