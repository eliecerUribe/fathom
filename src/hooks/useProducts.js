import { useState, useEffect } from "react";
import api from "../api";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await api.delete(`/products/${id}`);
      if (response) {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
      }
    } catch (error) {
      console.log("Delete has failed");
    }
  };

  const onEdit = async (id, data) => {
    try {
      const response = await api.put(`/products/${id}`, data);
      const updatedProducts = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            ...response.data,
          };
        }
        return product;
      });
      setProducts(updatedProducts);
    } catch (error) {
      console.log("Edition has failed");
    }
  };

  const onAdd = async (product) => {
    try {
      const { data } = await api.post("/products", { ...product });
      setProducts([...products, data]);
    } catch (error) {
      console.log("Adding product has failed");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    fetchProducts,
    onDelete,
    onEdit,
    onAdd,
  };
};

export default useProducts;
