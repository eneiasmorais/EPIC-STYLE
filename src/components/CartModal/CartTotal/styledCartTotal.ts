import styled from "styled-components";

export const StyledCartTotal = styled.div`
  color: black;
  padding: 10px 15px;

  .cartPrice__container {
    border-top: 1px solid black;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .total__header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1.125rem;
    padding-bottom: 10px;
  }

  .finalPrice {
    font-weight: bold;
  }

  .btns__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .btns__container button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
    transition: all;
    font-size: 1rem;
  }

  .btns__container .finish {
    background-color: black;
    color: white;
    padding: 10px 0px;
    font-weight: bold;
    border-radius: 5px;
  }

  .btns__container .remove {
    background-color: #d9d9d9;
    color: #9a9999;
    padding: 10px 0px;
    border-radius: 5px;
  }

  .btns__container .remove:hover {
    background-color: #9a9988;
    color: black;
  }
`;
