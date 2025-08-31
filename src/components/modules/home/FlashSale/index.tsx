import { Button } from "@/components/ui/button";
import NMContainer from "@/components/ui/core/NMContainer";
import ProductCard from "@/components/ui/core/ProductCard";
import { getFlashSaleProducts } from "@/services/FlashSale";

import { IProperty } from "@/types";
import Link from "next/link";
import CountDown from "./CountDown";

const FlashSale = async () => {
  const { data: properties } = await getFlashSaleProducts();

  return (
    <div className=" bg-white bg-opacity-50 pt-6 pb-8">
      <NMContainer className="my-16">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-8">
            <h2 className="text-3xl font-bold">Flash Sale</h2>
            <CountDown />
          </div>

          <Link href="/properties">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {properties?.slice(0, 4)?.map((property: IProperty, idx: number) => (
            <ProductCard key={idx} property={property} />
          ))}
        </div>
      </NMContainer>
    </div>
  );
};

export default FlashSale;
