import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animation";

export const StyledCartModal = styled.div`
  background-color: rgba(59, 58, 58, 0.8);
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  position: absolute;
  color: white;
  z-index: 1;

  .cartModal__container {
    animation: ${AnimationFadeIn} 0.7s;
    background-color: white;
    width: 90%;
    border-radius: 5px;
    max-width: 550px;
  }

  @media (min-width: 760px) {
    .cartModal__container {
      max-width: 550px;
    }
  }

  .emptyCart__container {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    gap: 10px;
  }

  .emptyCart__container h3 {
    font-size: 1.375rem;
  }

  .emptyCart__container span {
    color: #605f5f;
  }

  .notEmptyCart__container {
    display: flex;
    flex-direction: column;
    padding: 30px 15px;
    gap: 10px;
    max-height: 300px;
    overflow-y: auto;
  }

  .notEmptyCart__container li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    color: black;
    gap: 10px;
  }

  .notEmptyCart__container .item__info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .notEmptyCart__container .item__info .item__price {
    color: #9a9999;
  }

  .notEmptyCart__container .product__image {
    min-height: 88px;
    max-height: 88px;
    min-width: 90px;
    max-width: 90px;
    object-fit: cover;
    border-radius: 5px;
  }

  .notEmptyCart__container .itemQuantity__container {
    background-color: #b3b2b2;
    width: max-content;
    padding: 0px 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
  }

  .notEmptyCart__container .itemQuantity__container button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
    transition: all;
    color: #bb4e4e;
    font-size: 16px;
    font-weight: bold;
  }

  .deleteItem__btn {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
    transition: all;
    color: #bb4e4e;
  }

  .deleteItem__btn img {
    aspect-ratio: 3/2;
    align-self: flex-end;
    color: black;
    transition: all 0.3s;
  }

  .deleteItem__btn img:hover {
    transform: scale(1.05);
  }

  .notEmptyCart__container .itemQuantity__container .itemQuantity {
    background-color: #d9d9d9;
    padding: 4px 10px;
    border-radius: 5px;
    font-weight: 500;
    font-weight: bold;
  }

  button:hover {
    cursor: pointer;
  }

  header {
    background-color: black;
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
    font-weight: 600;
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
      drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    border-radius: 2px 2px 0 0;
  }

  header button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
    transition: all;
  }

  header button:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }
`;
