import { Button } from "@/components/ui/button";
import CardTwo from "@/components/ui/CardTwo";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types";
import Link from "next/link";
const FeaturedProducts = async () => {
  const { data: products } = await getAllProducts();

  return (
    <div className=" bg-opacity-50 py-20 customWidth">
      <div className="">
        <div className="flex items-center  justify-between mb-5">
          <h2 className="font-bold text-2xl">Featured Properties</h2>
          <Link href="/search">
            <Button variant="outline" className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>

        <div className="flex">
          <div className=" bg-red-500 w-full">
            <div className="grid lg:grid-cols-4 gap-5">
              {products?.slice(0, 8).map((property: IProduct) => (
                <CardTwo
                  key={property._id}
                  property={property}
                  propertyLink={`/search/${property._id}`}
                />
              ))}
            </div>

            <div className="w-[190px] rounded py-3.5 flex justify-center items-center  bg-secondary-400 mx-auto mt-10">
              <Link href="/search" className=" hover:text-white  ">
                More Properties
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-5 gap-8 my-5">
          {products?.slice(0, 5).map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
