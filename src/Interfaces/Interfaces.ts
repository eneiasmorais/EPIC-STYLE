export interface IProductsProviderProps {
  children: React.ReactNode;
}

export interface ICartProviderProps {
  children: React.ReactNode;
}

export interface IModalPatchProps {
  children: React.ReactNode;
}



export interface IProductsContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  filterCategories: (selectedCategory: string) => void;
  redirectToLogin: () => void;
}

export interface IPachUserContext{
  patchModal: boolean,
  setPatchModal: React.Dispatch<React.SetStateAction<boolean>>
}


export interface ICartContext {
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  cartProducts: ICartProducts[];
  setCartProducts: React.Dispatch<React.SetStateAction<ICartProducts[]>>;
  handleAddItemToCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  addItemQuantity: (id: number) => ICartProducts[];
  removeItemQuantity: (id: number) => ICartProducts[];
  wishListModal: boolean;
  setWishListModal: React.Dispatch<React.SetStateAction<boolean>>;
  wishListProducts: IProduct[];
  setWishListProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  handleAddItemToWishList: (id: number) => void;
  removeItemFromWishList: (id: number) => void;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
}

export interface ICartProducts extends IProduct {
  quantity: number;
  finalPrice: number;
}

export interface IProductCardProps {
  product: IProduct;
}

export interface INavBar {
  navBar: () => JSX.Element;
}

export interface IProductsList {
  ProductsList: () => JSX.Element;
}

export interface IHeader {
  token: string | null;
}
