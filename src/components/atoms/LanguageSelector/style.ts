import styled from "styled-components";

// Variables
const deepBlue = "#1e3470";
const speed3 = "cubic-bezier(0.26, 0.48, 0.08, 0.9)";
const height = "40px";
const backgroundColor = "linear-gradient(135deg, rgba(0, 98, 185, 0.8), rgba(30, 52, 112, 0.8))"; // Modern background color
const fontColor = "#000"; // Modern font color

// LanguageSwitcher component
export const LanguageSwitcher = styled.label`
  position: relative;
  display: inline-block;
  width: calc(${height} * 2);
  height: ${height};
  transform: translateY(40%);
  transition: transform 0.17s ${speed3};
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

// Select components
export const Select = styled.span`
  position: absolute;
  font-size: calc(${height} / 2.5);
  top: calc(${height} / 4);
  color: ${fontColor}; // Use the defined font color

  &.fr {
    left: calc(${height} / 3.5);
  }

  &.en {
    right: calc(${height} / 4);
  }
`;

// Slider components
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${backgroundColor}; // Use the defined background color
  box-shadow: 0 3px 64px rgba(${deepBlue}, 0.1);
  transition: 0.4s;
  border-radius: 50px;

  &:before {
    border-radius: 50px;
    position: absolute;
    content: "";
    height: ${height};
    width: ${height};
    left: 0;
    bottom: 0;
    background-color: white;
    box-shadow: 0 3px 64px rgba(${deepBlue}, 0.16);
    transition: 0.4s;
  }

  input:checked + & {
    background: ${backgroundColor}; // Use the defined background color
  }

  input:focus + & {
    box-shadow: none;
  }

  input:checked + &:before {
    transform: translateX(${height});
  }
`;

// Rounded slider
export const RoundedSlider = styled(Slider)`
  border-radius: ${height};
`;

// Rounded slider before
export const RoundedSliderBefore = styled(Slider)`
  border-radius: 50%;
`;
