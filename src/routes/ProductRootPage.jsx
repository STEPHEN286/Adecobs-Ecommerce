import React from "react";

import CategoryProducts from "../components/Ui/card/CategoryProducts";
import { useFetch } from "../hooks/useFetch";
import { CarouselComponent } from "../components/carousel/Carousel";


function CategoryLayout() {
  const { data: billboards, isLoading, error } = useFetch("billboards");

  
  return (
    <>
      <div className="">
        <CarouselComponent billboards={billboards} />
        <div className="bg-white  py-2">
          <CategoryProducts />
        </div>
      </div>
    </>
  );
}

export default CategoryLayout;
