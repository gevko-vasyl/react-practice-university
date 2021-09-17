import { CustomButton } from './Button.styled';

const Button = ({ text, onClick }) => {
  return <CustomButton onClick={onClick}>{text}</CustomButton>;
};

export default Button;
