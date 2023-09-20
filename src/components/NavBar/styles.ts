import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 100%;

  #category-select {
    display: block;
    font-size: var(--font-size-6);
    padding: 10px;
    font-weight: 500;
    line-height: 20px;
    border-radius: var(--radius-default);
    width: 100%;
    height: 3.5rem;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    margin: 1.875rem 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    @media (min-width: 1023px) {
      display: none;
    }
  }

  .option-category {
    padding: 0.625rem;
  }

  #buttons_categories {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 9rem;
    max-width: 1000px;

    @media (max-width: 1022px) {
      display: none;
    }
  }

  .category-button {
    border: none;
    padding: 10px 20px;
    font-size: var(--font-size-5);
    border-radius: var(--radius-default);
    cursor: pointer;
    box-shadow: var(--shadow);
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }

  .category-button:hover {
    transform: scale(1.05);
  }
`;
