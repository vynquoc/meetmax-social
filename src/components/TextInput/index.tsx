import { ReactNode } from 'react';
import './style.scss';

interface TextInputProps {
  icon?: ReactNode;
  placeholder: string;
  type: string;
  name: string;
  value?: string;
}

const TextInput = ({ icon, placeholder, type, name, value }: TextInputProps) => {
  return (
    <div className="input-container">
      <div className="input-icon">{icon}</div>
      <input placeholder={placeholder} type={type} name={name} value={value} />
    </div>
  );
};

export default TextInput;
