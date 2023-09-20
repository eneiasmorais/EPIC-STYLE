import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  min-height: 100vh;
  height: 100%;

  background-color: var(--color-secondary);
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .register-page__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .register-page__image {
    margin-top: 30px;
    width: 104px;
    height: 146px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .register-page__form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    .register-page__form-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      height: 30px;
      margin-bottom: 10px;

      .register-page__title {
        font-size: var(--font-size-3);
        font-weight: bold;
      }

      .register-page__redirect {
        font-size: var(--font-size-7);
        color: (--color-grey-2);
      }
    }

    button {
      width: 288px;
      height: 40px;
      margin-top: 10px;
      border-radius: 5px;
      border: 1px solid var(--color-grey-2);
      font-size: var(--font-size-6);
      font-weight: 400;
      background-color: var(--color-primary);
      color: var(--color-secondary);
      margin-top: 10px;
    }

    button:hover {
      transform: scale(1.01);
      background-color: #343433;
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    transform: scale(1.02);
  }

  @media (min-width: 1023px) {
    .register-page__container {
      max-width: 900px;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      .register-page__image {
        width: 300px;
        height: 420px;
      }
      .register-page__form-header {
        margin-bottom: 15px;
        .register-page__title {
          font-size: var(--font-size-1);
        }
        .register-page__redirect {
          font-size: var(--font-size-5);
        }
      }

      .register-page__form-container {
        button {
          width: 450px;
          height: 60px;
          font-size: var(--font-size-2);
        }
      }
    }
  }
`;
