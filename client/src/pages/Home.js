import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  const [currentCategory, setCategory] = useState("");

  return (
    <div className="container">
      <CategoryMenu setCategory={setCategory} />

      <ProductList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;

//The Home page component manages the state currentCategory
// setCategory callback function is passed to the CategoryMenu component as a prop to be executed on a new category pick.
// passed to the ProductList component as a prop and instructs which category's products should be retrieved using Apollo
