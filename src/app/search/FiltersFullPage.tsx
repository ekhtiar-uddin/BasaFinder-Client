"use client";

import { cleanParams } from "@/lib/utils";
import { setFilters } from "@/redux/features/globalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import FiltersFull from "./FiltersFull";

const FiltersFullPage = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );

  useEffect(() => {
    const initialFilters = Array.from(searchParams.entries()).reduce(
      (acc: any, [key, value]) => {
        if (key === "priceRange" || key === "squareFeet") {
          acc[key] = value.split(",").map((v) => (v === "" ? null : Number(v)));
        } else if (key === "coordinates") {
          acc[key] = value.split(",").map(Number);
        } else {
          acc[key] = value === "any" ? null : value;
        }

        return acc;
      },
      {}
    );

    const cleanedFilters = cleanParams(initialFilters);
    dispatch(setFilters(cleanedFilters));
  }, []);
  return (
    <div
      className={`xl:h-full 2xs:h-[65vh]  overflow-auto transition-all duration-300 ease-in-out  ${
        isFiltersFullOpen
          ? "md:w-5/12 sm:w-6/12    opacity-100 visible"
          : "w-0 opacity-0 invisible"
      }`}
    >
      <FiltersFull />
    </div>
  );
};

export default FiltersFullPage;
