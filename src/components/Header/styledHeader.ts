import styled from "styled-components";

export const StyledHeaderNew = styled.div`
  background-color: var(--color-primary);
  color: var(--color-secondary);
  font-family: "Montserrat", sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  padding: 10px 0px;

  .width__container {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  @media (min-width: 1023px) {
    padding-block: 20px;
    padding-inline: 10px;

    .width__container {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  h1 {
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    width: max-content;
    letter-spacing: 2px;
  }

  img {
    max-height: 30px;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
    transition: all;
    font-size: 16px;
    font-weight: bold;
  }

  .header--right__container {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;

    .header--button__login,
    .header--button__leave {
      display: flex;
      align-items: center;
      gap: 5px;
      border: 1px solid white;
      padding: 6px 8px;
      border-radius: 5px;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
    }

    .header--button__cart:hover,
    .header--button__wishes:hover,
    .header--button__userProfile:hover,
    .header--button__leave:hover {
      transform: scale(1.12);
      cursor: pointer;
    }

    .header--button__login:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }
`;
