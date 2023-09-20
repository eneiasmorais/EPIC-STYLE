import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { StyledDashboardPage } from "./StyleDashboard";
import { CartContext } from "../../providers/CartContext";
import { CartModal } from "../../components/CartModal/CartModal";
import { WishListModal } from "../../components/WishListModal/WishListModal";
import { PatchUserModal } from "../../components/PatchUserModal/PatchUserModal";
import { UserContext } from "../../providers/UserContext";

export const DashboardPage = () => {
  const { cartModal, wishListModal } = useContext(CartContext);
  const { patchModal } = useContext(UserContext);

  return (
    <StyledDashboardPage>
      {wishListModal && <WishListModal />}
      {patchModal && <PatchUserModal />}
      {cartModal && <CartModal />}
      <Header />
      {NavBar()}
      <ProductsList />
    </StyledDashboardPage>
  );
};
