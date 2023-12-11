import styled from "styled-components";


interface ICheckboxInputContainer {
    attrMargin?: string;
}

export const CheckboxStyle = styled.label`
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    color: ${ p => p.color || '#000' };
    gap: 10px;
    
`
export const CheckboxInputContainer = styled.div<ICheckboxInputContainer>`
    position: relative;
    display: flex;
    height: 20px;
    width: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${p => p.color || 'none'};
    background-color: ${p => p.color || 'none'};
    ${
        p => p.attrMargin && `
            margin: ${p.attrMargin}
        `
    };

`
export const CheckboxInput = styled.input`
    display: none;
`
