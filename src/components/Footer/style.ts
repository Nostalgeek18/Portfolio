import styled from "styled-components";

export const MainFooter = styled.footer`
    background: #000;
    color: #fff;
`

export const MainContainer = styled.div`
    max-width: 120rem;
    margin: auto;
    width: 92%;
`

export const MainFooterUpper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8rem 0;

    @media only screen and (max-width: 56.25em) {
        padding: 6rem 0;
      }
    
      @media only screen and (max-width: 37.5em) {
        display: block;
      }
`

export const MainFooterRow2 = styled.div`
    width: 40%;
    order: 1;
    max-width: 50rem; 
    @media only screen and (max-width: 56.25em) {
        width: 100%; 
    }
`