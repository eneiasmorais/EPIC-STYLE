import { useContext } from "react";
import { StyledNavBar } from "./styles";
import { IProductsContext } from "../../Interfaces/Interfaces";
import { ProductsContext } from "../../providers/ProductsContext";

export const NavBar = () => {
  const { filterCategories } =
    useContext<IProductsContext>(ProductsContext);

  const handleCategorySelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    filterCategories(event.target.value);
  };

  const handleCategoryButtonChange = (selectedCategory: string) => {
    filterCategories(selectedCategory);
  };

  return (
    <StyledNavBar>
      <select id="category-select" onChange={handleCategorySelectChange}>
        <option className="option-category" value="todos">
          SELECIONE NOSSAS OPÇÕES
        </option>
        <option className="option-category" value="Camisetas">
          CAMISETAS
        </option>
        <option className="option-category" value="Calças">
          CALÇAS
        </option>
        <option className="option-category" value="Acessórios">
          ACESSÓRIOS
        </option>
        <option className="option-category" value="Jaquetas">
          JAQUETAS
        </option>
      </select>
      <div id="buttons_categories">
        <button
          className="category-button"
          onClick={() => handleCategoryButtonChange("todos")}
          value="todos"
        >
          TODOS
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonChange("Camisetas")}
          value="Camisetas"
        >
          CAMISETAS
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonChange("Calças")}
          value="Calças"
        >
          CALÇAS
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonChange("Acessórios")}
          value="Acessórios"
        >
          ACESSÓRIOS
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryButtonChange("Jaquetas")}
          value="Jaquetas"
        >
          JAQUETAS
        </button>
      </div>
    </StyledNavBar>
  );
};
