import styled from "styled-components";

export const StyledProductsList = styled.div`
  overflow-x: auto;
  display: flex;
  align-items: center;

  .products__list {
    display: flex;
    align-items: center;
    justify-content: left;
    min-width: max-content;
    overflow-y: auto;
    padding: 15px 20px;

    gap: 1rem;
    width: max-content;
  }

  @media (min-width: 1023px) {
    padding-inline: 70px;
    padding-block: 20px;
    column-gap: 10px;
    justify-content: center;

    .products__list {
      max-height: 570px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      column-gap: 40px;
      align-items: center;
      overflow-y: auto;
      padding-inline: 50px;
      overflow-x: hidden;
    }
  }

  @media (min-height: 440px) {
    .products__list {
      max-height: 210px;
    }
  }

  @media (min-height: 645px) {
    .products__list {
      max-height: 430px;
    }
  }

  @media (min-height: 725px) {
    .products__list {
      max-height: 500px;
    }
  }

  @media (min-height: 820px) {
    .products__list {
      max-height: 580px;
    }
  }

  @media (min-height: 900px) {
    .products__list {
      max-height: 660px;
    }
  }

  @media (min-height: 1025px) {
    .products__list {
      max-height: 730px;
    }
  }

  @media (min-width: 1140px) {
    .products__list {
      column-gap: 60px;
    }
  }
`;
