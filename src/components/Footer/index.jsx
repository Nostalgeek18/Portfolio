import * as style from './style'
import { AppContext } from '../../App'
import { useContext } from 'react'
import { getUserInfos } from '../../tools/mix.ts'

export default function Footer () {

    const { t } = useContext(AppContext) 

    const { socialsNetwork, name } = getUserInfos();

    return (
        <style.MainFooter>
         <style.MainContainer>
            <style.MainFooterUpper>
                <FooterInfos>
                    <TitleInfos>{name}</TitleInfos>
                    <DescriptionInfos>
                        {t('footer.description')}
                    </DescriptionInfos>
                </FooterInfos>
                <FooterSocials>
                    <SocialInfos>{t('footer.socials')}</SocialInfos>
                    <SocialsWrapper>
                        {socialsNetwork.map((social, index) => (
                            <SocialLink key={index} social={social}/>
                        ))}
                    </SocialsWrapper>
            </FooterSocials>
            </style.MainFooterUpper>
        </style.MainContainer>
    </style.MainFooter>
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
        <style.MainFooterRow2>
	        {children}
        </style.MainFooterRow2>
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

