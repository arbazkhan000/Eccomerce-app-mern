import { LinkButton } from "@/_components/LinkButton";
import StarGenerator from "@/_components/StartGenerator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const ProductCard = ({ name, price, image, description }) => {
    return (
        <div className="">
            <Card className="border w-full  ">
                {/* Image Container */}
                <div className="relative group rounded-xl">
                    <img
                        src={image}
                        className=" p-3 w-full h-[200px] sm:h-[200px] md:h-[300px] lg:h-[200px] rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                        alt={name}
                    />
                </div>
                {/* Card Content */}

                <CardContent className="">
                    <div>
                        <h6 className="font-semibold pb-2  sm:text-xl md:text-2xl ">
                            {name}
                        </h6>
                        <span className="block text-primary-500 font-bold">
                            ${price.toFixed(2)}
                        </span>
                        <p className="text-ellipsis overflow-hidden">
                            {description.slice(0, 50)}...
                        </p>

                        {/* Star Generated */}
                        <StarGenerator rating={4.5} />
                    </div>
                    {/* <CardTitle className="mt-4 font-semibold pb-2 text-lg sm:text-xl md:text-2xl text-center">
                        {name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm sm:text-base md:text-lg space-y-2 text-center">
                        <span className="block text-primary-500 font-bold">
                            ${price.toFixed(2)}
                        </span>
                        <p className="text-ellipsis overflow-hidden">
                            {description.slice(0, 50)}...
                        </p>

                        <span className="text-center">
                            {" "}
                            <StarGenerator />
                        </span>
                    </CardDescription> */}
                </CardContent>
                {/* Footer Buttons */}
                <CardFooter className="mt-4 flex justify-center">
                    <LinkButton text="View Product" />
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProductCard;
