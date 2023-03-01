import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {

  return (
    <div className="container">
      {/* setCategory callback function is passed to the CategoryMenu component as a prop to be executed on a new category pick. */}
      <CategoryMenu />
      {/* currentCategory passed to the ProductList component as a prop and instructs which category's products should be retrieved using Apollo */}
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;

