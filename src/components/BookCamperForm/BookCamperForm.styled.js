import styled from "styled-components";

export const BookForm = styled.form`
  max-width: 640px;
  padding: 44px;

  border: none;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.bookFormBorder};

  .book-form-btn {
    display: block;
    margin: 0 auto;
    width: 166px;
  }
  .error-text {
    position: absolute;
    top: -16px;
    left: 4px;
    font-size: 12px;
    color: ${({ theme }) => theme.buttonHoverColor};
    margin: 0;
    padding: 0;
  }
`;

export const BookFormTitle = styled.h3`
  margin-bottom: 8px;

  color: ${({ theme }) => theme.textColorPrimary};

  font-family: Inter, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
`;

export const BookFormText = styled.p`
  color: ${({ theme }) => theme.textColorFourth};

  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const BookFormInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;
