import styled from "styled-components";

interface SectionInterface {
  background : string;
}

export const AboutDetailsParagraph = styled.p`
    font-size: 1.8rem;
    color: grey;
    max-width: 60rem;
    line-height: 1.7;
    margin-bottom: 1rem; 


    &:last-child {
      margin-bottom: 4rem; }
`

export const AboutSection = styled.section<SectionInterface>`
    background: ${({background})=>(background ? background : '#fafafa')};
    padding: 12rem 0;

      @media only screen and (max-width: 56.25em) {
          padding: 8rem 0; 
      }
    
` 

export const MainContainer = styled.div`
  max-width: 120rem;
  margin: auto;
  width: 92%;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 2.8rem;
  margin-bottom: 3rem; 

    @media only screen and (max-width: 37.5em) {
        font-size: 2.4rem;  
      }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem; 

    @media only screen and (max-width: 56.25em) {
      grid-template-columns: 1fr;
      grid-gap: 8rem; 
    } 
`

export const ContentSkills = styled.div`
`

export const TitleSkills = styled.h3`
    font-weight: 700;
    font-size: 2.8rem;
    margin-bottom: 3rem; 
        @media only screen and (max-width: 37.5em) {
            font-size: 2.4rem; 
        }
`

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const MainTitle = styled.span`
  display: block;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative; 


  &::after {
    content: '';
    position: absolute;
    top: calc(100% + 1.5rem);
    height: 5px;
    width: 3rem;
    background: rgba(var(--main-color), 1);
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px; 
      @media only screen and (max-width: 37.5em) {
          top: calc(100% + 1.2rem);  
        }
    }
`

export const MainContent = styled.div`

`