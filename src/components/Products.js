import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      axios.get("");
    };
    getProducts();
  }, []);

  return (
    <>
      <h1>Продукты</h1>
    </>
  );
};

export default Products;
