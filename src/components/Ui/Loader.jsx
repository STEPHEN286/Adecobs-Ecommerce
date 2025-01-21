// import { skipToken } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader() {
  return (
    <div>
      <Skeleton height={30} width={200} />
      <Skeleton count={3} height={20} />
    </div>
  );
}


