import { HTMLInputTypeAttribute, RefObject } from 'react';
import * as style from './style'

export interface IInputProps {
    attrFontSize?: string;
    attrFontWeight?: string;
    autoComplete?: string;
    className?: string;
    disabled?: boolean;
    id?: string;
    inputMode: 'decimal' | 'email' | 'numeric' | 'text',
    key?: string;
    name: string;
    placeholder?: string;
    shouldHover?: boolean;
    type: HTMLInputTypeAttribute;
    value?: string | number;
    warning?: boolean;
    widthProp?: string;
    heightProp?: string;
    styleType?: string;
    onChange?: (e?: any) => void;
    onKeyDown?: (e?: any) => void;
    onIconLeftClick?: (e?: any) => void;
    onIconRightClick?: (e?: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyPress?: (e?: any) => void;
    shouldHideIconRight?: boolean;
    ref?: RefObject<HTMLInputElement>;
    gapProp?: string;
    autoFocus?: boolean
}

export interface IInputProps {
    attrFontSize?: string;
    attrFontWeight?: string;
    autoComplete?: string;
    className?: string;
    disabled?: boolean;
    id?: string;
    inputMode: 'decimal' | 'email' | 'numeric' | 'text',
    key?: string;
    name: string;
    placeholder?: string;
    shouldHover?: boolean;
    type: HTMLInputTypeAttribute;
    value?: string | number;
    warning?: boolean;
    widthProp?: string;
    heightProp?: string;
    styleType?: string;
    onChange?: (e?: any) => void;
    onKeyDown?: (e?: any) => void;
    onIconLeftClick?: (e?: any) => void;
    onIconRightClick?: (e?: any) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onKeyPress?: (e?: any) => void;
    shouldHideIconRight?: boolean;
    ref?: RefObject<HTMLInputElement>;
    gapProp?: string;
    autoFocus?: boolean
}

export const Input = ({
    attrFontSize,
    attrFontWeight,
    autoComplete,
    className = '',
    disabled,
    id,
    inputMode,
    name,
    onChange,
    onKeyDown,
    placeholder,
    type,
    value,
    onFocus,
    onBlur,
    ref,
    autoFocus,
}: IInputProps) => {
    return (
        <style.StyledInput
            id={id}
            className={className}
            $attrFontSize={attrFontSize}
            $attrFontWeight={attrFontWeight}
            autoComplete={autoComplete}
            disabled={disabled}
            inputMode={inputMode}
            name={name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            type={type}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref}
            autoFocus={autoFocus}
        />
    );
};