import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const HeroCarousel = () => {
    const imagedata = [
        "https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/12786596/pexels-photo-12786596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/19304049/pexels-photo-19304049/free-photo-of-wireless-mouse-and-mechanical-gaming-keyboard-on-the-desk.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    return (
        <div className="relative mx-auto w-full overflow-hidden">
            <Carousel>
                <CarouselContent>
                    {imagedata.map((elem, index) => (
                        <CarouselItem key={elem}>
                            <img
                                className="w-full object-cover h-[200px] sm:h-[500px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
                                src={elem}
                                alt={`Carousel image ${index + 1}`}
                                onError={(e) =>
                                    (e.currentTarget.src =
                                        "/fallback-image.jpg")
                                }
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 rounded-full z-10" />
                <CarouselNext className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 rounded-full z-10" />
            </Carousel>
        </div>
    );
};

export default HeroCarousel;
