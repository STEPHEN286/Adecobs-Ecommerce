import React from "react";
import ProductCard from "./Card";
import { useParams } from "react-router";
import { useFetch } from "../../../hooks/useFetch";

export default function CategoryProducts() {
  const { categoryId } = useParams();
  const { data: products, isLoading, error } = useFetch("products");

  const filteredProducts =
    products?.filter(
      (product) => String(product.categoryId) === String(categoryId)
    ) || [];

  // Handling loading and error states
  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }
  return (
    <div className="flex space-x-4 p-5">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
}
