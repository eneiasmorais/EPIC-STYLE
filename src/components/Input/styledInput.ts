import styled from "styled-components";

export const StyledInput = styled.div`
  width: 288px;
  height: 95px;

  display: flex;
  flex-direction: column;

  label {
    height: 20px;
    font-size: var(--font-size-6);
    color: var(--color-primary);
  }

  input {
    width: 280px;
    height: 40px;
    padding-left: 5px;
    border: 1px solid var(--color-grey-2);
    border-radius: 5px;
    font-size: var(--font-size-8);
    color: var(--color-grey-2);
    background-color: var(--color-grey-0);
  }

  p {
    font-size: var(--font-size-7);
    color: var(--color-negative);
    margin-bottom: 5px;
  }

  @media (min-width: 1023px) {
      width: 450px;
    height: 130px;

    label {
      height: 30px;
      font-size: var(--font-size-2);
    }

    input {
      width: 440px;
      height: 60px;
      padding-left: 10px;
     
      font-size: var(--font-size-4);
    }

    p {
      font-size: var(--font-size-4);
      color: var(--color-negative);
    }
  }
`;
