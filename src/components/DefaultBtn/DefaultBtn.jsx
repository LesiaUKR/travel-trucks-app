import { StyledBtn } from "./DefaultBtn.styled";

export default function DefaultBtn({ text, className, type, onClick }) {
  return (
    <StyledBtn type={type} className={className} onClick={onClick}>
      {text}
    </StyledBtn>
  );
}
