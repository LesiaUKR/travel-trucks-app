import styled from "styled-components";

export const BookForm = styled.form`

width: 641px;
padding: 44px;

border: none;
border-radius: 10px;
outline: 1px solid ${({ theme }) => theme.bookFormBorder};

`

export const BookFormTitle = styled.h3`
margin-bottom:8px;

color: ${({ theme }) => theme.textColorPrimary};

font-family: Inter, sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 1.2;
`

export const BookFormText = styled.p`
color: ${({ theme }) => theme.textColorFourth};

font-family: Inter, sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
`

export const BookFormInputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 14px;
padding-top: 24px;
padding-bottom: 24px;
`