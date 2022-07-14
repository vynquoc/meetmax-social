import React, { ReactNode } from 'react';
import './style.scss';

interface TextInputProps {
  icon?: ReactNode;
  placeholder?: string;
  type: string;
  name: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const TextInput = ({ icon, placeholder, type, name, value, onChange }: TextInputProps) => {
  return (
    <div className="input-container">
      <div className="input-icon">{icon}</div>
      <input placeholder={placeholder} type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;
