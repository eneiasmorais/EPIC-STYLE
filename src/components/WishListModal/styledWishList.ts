import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animation";

export const StyledWishListModal = styled.div`
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
  font-family: "Montserrat", sans-serif;

  .wishList__container {
    animation: ${AnimationFadeIn} 0.7s;
    background-color: white;
    width: 90%;
    border-radius: 5px;
    max-width: 550px;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
    transition: all;
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

  .close__wishList:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .emptyWishList__container {
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 15px;
    gap: 10px;
  }

  .emptyWishList__container p {
    font-size: 1.375rem;
    text-align: center;
  }

  .emptyWishList__container span {
    color: #605f5f;
  }

  .wishList__container ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 20px 20px 20px;
    min-width: 220px;
    max-height: 330px;
    overflow-y: auto;
    width: 100%;
  }

  .wishList__container li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    color: black;
    gap: 10px;
  }

  .wishList__container .product__image {
    min-height: 90px;
    max-height: 90px;
    min-width: 90px;
    max-width: 90px;
    object-fit: cover;
    border-radius: 5px;
  }

  .wishList__container .itemInfo__container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .wishList__container .itemInfo__container .item__name {
    font-weight: 600;
    font-size: 1.125rem;
  }

  .wishList__container .itemInfo__container .item__category {
    font-size: 0.75rem;
    color: #9a9999;
  }

  .wishList__container .itemInfo__container .item__price {
    font-size: 0.75rem;
    color: #9a9999;
  }

  .wishList__container .btns__container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .wishList__container .btns__container img {
    max-width: 30px;
    max-height: 30px;
    transition: all 0.2s;
  }

  .wishList__container .btns__container img:hover {
    transform: scale(1.2);
  }
`;
