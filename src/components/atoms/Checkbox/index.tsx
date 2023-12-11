// CustomCheckbox.jsx
import React from 'react';
import * as style from './style';

interface ICheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ checked, onChange }) => {
  return (
    <style.CheckboxInputContainer>
      <style.CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </style.CheckboxInputContainer>
  );
};
