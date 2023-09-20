import styled from "styled-components";

export const StyledLoginPage = styled.div`
  min-height: 100vh;
  height: 100%;

  background-color: var(--color-secondary);
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login-page__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button--login {
    background-color: var(--color-primary);
    color: var(--color-secondary);
    margin-top: 10px;
  }

  .button--login:hover {
    transform: scale(1.01);
    background-color: #343433;
  }

  .login-page__image {
    margin-top: 30px;
    width: 104px;
    height: 146px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .login-page__form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    .login-page__title {
      font-size: var(--font-size-3);
      font-weight: bold;
    }

    button {
      width: 288px;
      height: 40px;
      border-radius: 5px;
      border: 1px solid var(--color-grey-2);
      font-size: var(--font-size-6);
      font-weight: 400;
    }
  }

  .login-page__redirect {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    height: 70px;

    p {
      font-size: var(--font-size-8);
      color: var(--color-grey-2);
    }

    button {
      background-color: var(--color-grey-0);
      color: var(--color-grey-2);
    }

    button:hover {
      transform: scale(1.01);
      background-color: #343433;
      color: var(--color-secondary);
      cursor: pointer;
    }
  }

  @media (min-width: 1023px) {
    .login-page__container {
      max-width: 900px;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }

    .login-page__image {
      width: 300px;
      height: 420px;
    }

    .login-page__form-container {
      .login-page__title {
        font-size: var(--font-size-1);
        margin-bottom: 15px;
      }

      button {
        width: 450px;
        height: 60px;
        font-size: var(--font-size-2);
      }
    }

    .button--login {
      margin: 10px 0;
    }

    .button--login:hover {
      cursor: pointer;
    }

    .login-page__redirect {
      height: 95px;
      p {
        font-size: var(--font-size-5);
        color: var(--color-grey-2);
      }
    }
  }
`;
