import styled from "styled-components";

interface ISkillProps {
    color?: string;
    background?: string;
}

export const Skill = styled.div<ISkillProps>`
    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    font-size: 1.6rem;
    border-radius: 5px;
    font-weight: 600;
    color: ${({ color }) => (color ? color : '#777')};
    background: ${({ background }) => (background ? background : 'rgba(153, 153, 153, 0.2)')};
`