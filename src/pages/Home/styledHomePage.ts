import styled from "styled-components";

export const StyledHomePage = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 100px;

  .logo__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span:first-of-type {
      font-size: 1.875rem;
      font-weight: 600;
      text-align: center;
      padding-top: 10px;
    }

    .subtitle {
      text-align: center;
      padding: 20px 0px;
      line-height: 150%;
      font-size: 1.25rem;
      font-weight: 400;
    }

    img {
      filter: drop-shadow(10px 10px 4px rgb(0, 0, 0, 0.2));
      max-height: 250px;
    }
  }

  .links__container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    a {
      text-decoration: none;
      color: white;
      background-color: black;
      padding: 12px 30px;
      border-radius: 5px;
      text-transform: uppercase;
      text-align: center;
      font-weight: 500;
      min-width: 220px;
      transition: all 0.2s;
    }

    a:hover {
      transform: scale(1.05);
      background-color: #343433;
    }
  }
`;
