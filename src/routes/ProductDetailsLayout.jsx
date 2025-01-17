import React from "react";
import ProductDetails from "../components/product-details/ProductDetails";
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import Wrapper from "../components/Ui/card/Wrapper";
export default function ProductDetailsLayout() {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useFetch(`products/${productId}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details</div>;
  }
  console.log("products =>", product);

  return (
  <div><ProductDetails product={product} />
  <Wrapper />
  </div>
);
}
