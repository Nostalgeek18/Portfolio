import styled from "styled-components";
import { Link } from "react-router-dom"

export const SectionWrapper = styled.section`
    color: #fff;
    background: linear-gradient(to right,  rgba(var(--main-color), 0.8),  rgba(var(--main-color), 0.8)), url(/assets/svg/common-bg.svg);
    background-size: cover;
    background-position: center;
    position: relative; 
        @media only screen and (max-width: 37.5em) {
            height: unset;
            min-height: unset; 
        }
`

export const SectionContent = styled.div`
    padding: 25rem 0 17rem 0;
    max-width: 90rem;
    width: 92%;
    margin: auto; 
        @media only screen and (max-width: 37.5em) {
            padding: 19rem 0 13rem 0;
            margin: auto;
            position: static;
            transform: translate(0, 0); 
        } 
`

export const HeaderSection = styled.h1`
    font-size: 6rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center; 
        @media only screen and (max-width: 37.5em) {
            font-size: 4.5rem; 
        }
`

export const InfosSection = styled.div`
    margin: 3rem auto 0 auto;
    max-width: 80rem;
`

export const TextPrimary = styled.p`
    color: #fff;
    font-size: 2.2rem;
    text-align: center;
    width: 100%;
    line-height: 1.6; 
        @media only screen and (max-width: 37.5em) {
            font-size: 2rem;
        }
`

export const CTASection = styled.div`
    margin-top: 5rem;
    text-align: center;
`

export const CTALink = styled(Link)`
    background: #fff;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: inline-block;
    font-weight: 700;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
    transition: transform .3s;
    padding: 1.5rem 8rem;
    font-size: 2rem;

    &:hover {
        transform: translateY(-3px);
    }
`