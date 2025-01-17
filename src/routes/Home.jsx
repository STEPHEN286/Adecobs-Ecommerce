import React from "react";
import { CarouselComponent } from "../components/carousel/Carousel";
// import ProductCard, { CardComponent } from "../components/Ui/card/Card.jsx";
import { useFetch } from "../hooks/useFetch.js";

import FeaturedProducts from "../components/Ui/card/FeaturedProducts.jsx";
import IndicateContainer from "../components/short-info/IndicateContainer.js";
import Subscription from "../components/containers/Subscription.jsx";
import SkeletonLoader from "../components/Ui/Loader.jsx";

export default function Home() {
  const { data: billboards, isLoading, error } = useFetch("billboards");

  if (isLoading) return <SkeletonLoader />;
  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }
  return (
    <div className="space-y-4 w-full  ">
      <CarouselComponent billboards={billboards} />
      <div className="sm:px-6 lg:px-8">
        <FeaturedProducts />
        <IndicateContainer />
        {/* <ToolTipComponent /> */}
        <Subscription />
      </div>
    </div>
  );
}
