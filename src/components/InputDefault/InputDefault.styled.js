import styled from "styled-components";

export const Input = styled.input`
width: 527px;
height: 60px;
padding: 18px;

border: none;
border-radius: 12px;
background: ${({ theme }) => theme.inputBackground};

&::placeholder{
   color: ${({ theme }) => theme.textColorFourth};

font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
}

&:focus::placeholder {
      color: #101828;
  }

&:focus {
   outline: none;}  
`

export const Textarea = styled.textarea`
width: 527px;
height: 118px;
padding: 18px;

border: none;
border-radius: 12px;
background: ${({ theme }) => theme.inputBackground};

resize: none;
&::placeholder{
   color: ${({ theme }) => theme.textColorFourth};

font-family: Inter, sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
}

&:focus::placeholder {
      color: #101828;
  }

&:focus {
   outline: none;}  
`