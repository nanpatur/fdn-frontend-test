import { useQuery } from "react-query";
import ProductService from "../services";
import { useEffect, useState } from "react";
import axios from "axios";

export const useProducts = async (params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async (params) => {
    try {
      setIsLoading(true);
      const productService = new ProductService();
      const data = await axios.get(`/fdn/products`, {
        params,
      });
      console.log(data);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getProducts(params);
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};
