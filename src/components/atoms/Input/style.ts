import styled from 'styled-components';

interface IStyledInputProps {
    $attrFontSize?: string;
    $attrFontWeight?: string;
}

export const StyledInput = styled.input<IStyledInputProps>`
    width: 100%;
    background-color: transparent;
    color: ${p =>  p.color || "#222"};
    flex: 1;
    font-weight: ${ p => p.theme.fontWeight[p?.$attrFontWeight ?? 'regular']};
    font-size: ${p => p.$attrFontSize ?? '16px'};
    line-height: 24px;
    ${
        p => p.disabled && `
            color: #000;
            opacity: 1;
            
        `
    };
    //Placeholder color
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: ${p =>  p.color || "#696969"};
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: ${p =>  p.color || "#696969"};
        opacity:  1;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: ${p =>  p.color || "#696969"};
        opacity:  1;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${p =>  p.color || "#696969"};
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${p =>  p.color || "#696969"};
    }

    ::placeholder { /* Most modern browsers support this now. */
        color: ${p =>  p.color || "#696969"};
    }
`;