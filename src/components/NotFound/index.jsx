import * as styled from './style'
import { AppContext } from "../../App"
import { useContext } from 'react'

export default function NotFound() {

    const { t } = useContext(AppContext)

    return (
        <styled.SectionWrapper>
            <styled.SectionContent>
                <styled.HeaderSection>{t('pageNotFound.title')} ! </styled.HeaderSection>
                <styled.InfosSection>
                    <styled.TextPrimary>{t('pageNotFound.text')}</styled.TextPrimary>
                </styled.InfosSection>
                <styled.CTASection>
                    <styled.CTALink to="/">{t('pageNotFound.cta')}</styled.CTALink>
                </styled.CTASection>
            </styled.SectionContent>
        </styled.SectionWrapper>
    )
}