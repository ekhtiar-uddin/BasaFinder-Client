import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface ReusableCarouselProps<T extends { id: string | number }> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  flexBasisClassName?: string;
  playSeconds?: number;
  sectionName?: string;
}

const ReusableCarousel = <T extends { id: string | number }>({
  data,
  renderItem,
  flexBasisClassName = "",
  playSeconds,
  sectionName,
}: ReusableCarouselProps<T>) => {
  const plugin = useRef(
    Autoplay({
      delay: playSeconds,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ align: "start", loop: true }}
      className="w-full "
    >
      {/* -ml-4 */}
      <CarouselContent className="">
        {data.map((item) => (
          <CarouselItem key={item.id} className={` ${flexBasisClassName}`}>
            {renderItem(item)}
          </CarouselItem>
        ))}
      </CarouselContent>

      <>
        <CarouselPrevious className="carouselButton top-[-40.5px]! left-auto! right-10" />
        <CarouselNext className="carouselButton -top-10 right-0" />
      </>
    </Carousel>
  );
};

export default ReusableCarousel;
