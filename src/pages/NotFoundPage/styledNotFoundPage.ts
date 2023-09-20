import styled from "styled-components";

export const StyledNotFoundDiv = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Montserrat", sans-serif;

  @media (min-width: 800px) {
    flex-direction: row;
    padding: 0px 20px;

    .left__container {
      max-width: 40%;
    }
  }

  .left__container {
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    gap: 15px;

    span:first-of-type {
      font-size: 2.375rem;
      font-weight: 600;
    }

    .error__info {
      line-height: 130%;
      font-size: 18px;
    }

    a {
      text-decoration: none;
      color: white;
      background-color: black;
      text-align: center;
      padding: 18px 20px;
      border-radius: 5px;
      width: fit-content;
    }

    a:hover {
      transform: scale(1.05);
      background-color: #343433;
    }
  }

  .right__container {
    background-color: #858484;
    width: 300px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    filter: drop-shadow(10px 10px 4px rgb(0, 0, 0, 0.2));

    img {
      height: 100px;
    }
  }

  .right__container:hover {
    transform: scale(1.05);
  }
`;
