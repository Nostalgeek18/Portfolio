import { AppContext } from "../App"
import { useContext } from "react"
import { getUserInfos } from '../tools/mix.ts'

export default function Contact () {

  const { t }     = useContext(AppContext) 
  const { email } = getUserInfos()

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <MainContainer>
        <MainInfos>
          <ContactHeading>{t('contact.title')}</ContactHeading>
          <ContactDescription email={email}/>
        </MainInfos>
      </MainContainer>
    </section>
  )
}

function MainContainer({children}) {
return (
  <div className="main-container">
    {children}
  </div>
)
}

function MainInfos({children}) {
return (
  <h2 className="heading heading-sec heading-sec__mb-med">
    {children}
  </h2>
)
}

function ContactHeading({children}) {
return (
  <span className="heading-sec__main heading-sec__main--lt">{children}</span>
)
}

function ContactDescription({email}) {

const { t } = useContext(AppContext) 

return (
  <span className="heading-sec__sub heading-sec__sub--lt">
    {t('contact.text')} 
    <a href={`mailto:${email}`} className="footer__link">
    {email}
    </a>
  </span>
)
}

export { Contact, MainContainer, MainInfos , ContactHeading, ContactDescription}