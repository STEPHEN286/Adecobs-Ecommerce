import React from "react";
import ProductCard from "./Card";
// import { useParams } from "react-router";
import { useFetch } from "../../../hooks/useFetch";

export default function Wrapper() {
  const { data, error } = useFetch("products");
  console.log("data", data);
  if (error) {
    console.error("Fetch error:", error); // Log error details
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  const featuredProducts = data.filter(
    (product) => product.isFeatured === true
  );
  return (
    <div className="flex flex-col flex-wrap p-2   md:space-y-3 md:p-4   border-b">
      <h2 className="text-md text">Featured Product</h2>
      <div className="flex w-full overflow-x-auto space-x-4 py-4 snap-normal scrollbar-hide">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="scroll-snap-start"
          />
        ))}
      </div>
    </div>
  );
}
