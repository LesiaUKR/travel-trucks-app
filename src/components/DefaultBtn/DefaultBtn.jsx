import { StyledBtn } from "./DefaultBtn.styled";

const DefaultBtn = ({ text, className, type, onClick }) => {
  return (
    <StyledBtn type={type} className={className} onClick={onClick}>
      {text}
    </StyledBtn>
  );
};

export default DefaultBtn;
