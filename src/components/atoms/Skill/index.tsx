import * as style from './style'
import React from 'react';

export interface ISkillProps {
    color?: string;
    background?: string;
    children: React.ReactNode
}


export default function Skill({
     color,
     background,
     children,
     ...props
    } : ISkillProps ) {
    return (
        <style.Skill color={color} background={background}>
            {children}
        </style.Skill>
    )
}