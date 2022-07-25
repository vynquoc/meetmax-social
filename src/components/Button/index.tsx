import './style.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  inverted?: boolean;
}

const Button = ({ text, onClick, inverted }: ButtonProps) => {
  return (
    <button className={`button ` + (inverted && 'inverted')} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
