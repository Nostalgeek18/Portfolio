import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.header`
    position: fixed;
    width: 100%;
    z-index: 1000;
    background: #000;
    background: #fff;
    box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;

    @media only screen and (max-width: 56.25em) {
        padding: 0 2rem;
    }
`;

export const NavigationUL = styled.ul`
    display: flex; 

        @media only screen and (max-width: 37.5em) {
            display: none; 
        }
`

export const LinkWrapper = styled.li`

`

export const HeaderLink = styled(Link)`
  padding: 2.2rem 3rem;
  display: inline-block;
  font-size: 1.6rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  transition: color 0.3s;

  &:hover {
    color: rgba(var(--main-color), 1);
  }

  @media only screen and (max-width: 56.25em) {
    padding: 3rem 1.8rem;
    font-size: 1.5rem;
  }
`;

interface ISmallMenuInterface  {
    smallMenuActive: boolean;
}

export const SmallMenuWrapper  = styled.div<ISmallMenuInterface>`
background: #fff;
position: absolute;
width: 100%;
top: 100%;
left: 0%;
visibility: hidden;
opacity: 0;
transition: all 0.3s;
box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
-moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);

/* Conditionally apply styles for the active state */
${(props) =>
  props.smallMenuActive &&
  css`
    visibility: visible;
    opacity: 1;
  `}

@media only screen and (max-width: 37.5em) {
  /* Additional styles for the active state at smaller screen sizes */
  ${(props) =>
    props.smallMenuActive &&
    css`
      visibility: visible;
      opacity: 1;
    `}
}
`;

export const SmallMenuLink = styled.div`
a {
  display: block;
  text-decoration: none;
  padding: 2.5rem 3rem;
  font-size: 1.6rem;
  color: #333;
  text-align: right;
  border-bottom: 1px solid #eee;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s;

  &:hover {
    color: rgba(var(--main-color), 1);
  }
}

/* Styles for the first link */
&:first-child {
  a {
    border-top: 1px solid #eee;
  }
}

/* Styles for the last link */
&:last-child {
  a {
    border-bottom: 0;
  }
}
`;

export const SmallMenuContent = styled.div`
  /* Styles for .header__sm-menu-content */
`;

export const SmallMenuLinks = styled.ul`
  /* Styles for .header__sm-menu-links */
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #333;
  transition: color .3s; 
     &:hover {
       color: rgba(var(--main-color), 1)
     }
`

export const LogoImgContainer = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50px;
  overflow: hidden;
  margin-right: 1.5rem;
  background: rgba(var(--main-color), 1); 

  @media only screen and (max-width: 56.25em) {
      width: 4.5rem;
      height: 4.5rem;
      margin-right: 1.2rem;
    }
`

export const LogoLink = styled(Link)`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
`

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`