import React from "react";
import ProductDetails from "../components/product-details/ProductDetails";
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import Wrapper from "../components/Ui/card/Wrapper";
import ProductDescription from "../components/product-details/ProductDescription";
export default function ProductDetailsLayout() {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useFetch(`products/${productId}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details</div>;
  }
  // console.log("products =>", product);

  return (
  <div className="flex flex-col gap-4">
    <ProductDetails product={product} />
    <ProductDescription decription={product.description} />

  <Wrapper />
  </div>
);
}
