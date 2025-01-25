"use client";

import { Carousel } from "flowbite-react";
import { customTheme } from "./carouselTheme";

export function CarouselComponent({ billboards }) {
  return (
    <div className="h-56  md:h-[400px] xl:h-[400px] 2xl:h-96">
      <Carousel theme={customTheme} className="rounded-none">
        {billboards &&
          billboards.map((billboard) => (
            <img
              className="object-cover"
              key={billboard.id}
              src={billboard.imageUrl}
              alt="..."
            />
          ))}
      </Carousel>
    </div>
  );
}
