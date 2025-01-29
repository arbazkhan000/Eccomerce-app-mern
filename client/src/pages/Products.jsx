import ReviewCard from "@/_components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Minus, Plus } from "lucide-react";
import { useState } from "react";

const Products = ({ initialStock = 10 }) => {
    const productArray = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ];
    const colors = [
        { name: "white", value: "#FFFFFF" },
        { name: "gray", value: "#808080" },
    ];
    const [selectedColor, setSelectedColor] = useState("white");
    const [productQuantity, setProductQuantity] = useState(1);
    const [pincode, setPincode] = useState("");
    const [purchasedProduct, setpurchasedProduct] = useState(null);

    const [address, setAddress] = useState("");
    const productStock = initialStock;

    const decrementQuantity = () => {
        setProductQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : prevQty));
    };

    const incrementQuantity = () => {
        setProductQuantity((prevQty) =>
            prevQty < productStock ? prevQty + 1 : prevQty
        );
    };

    return (
        <div className="mx-auto w-[90%] py-5">
            {/* Main Container */}
            <div className="flex flex-col md:flex-row gap-5">
                {/* Left Side (Images) */}
                <div className="md:w-1/2 flex flex-col items-center">
                    <img
                        className="w-full max-w-lg rounded-lg"
                        src={productArray[0].image}
                        alt="Product"
                    />
                    <section className="grid grid-cols-3 gap-3 mt-4">
                        {productArray.map((product, index) => (
                            <img
                                key={index}
                                className="h-[60px] w-[60px] object-cover rounded-lg cursor-pointer border hover:scale-105 transition-transform"
                                src={product.image}
                                alt={`Thumbnail ${index + 1}`}
                            />
                        ))}
                    </section>
                </div>

                {/* Right Side (Details) */}
                <div className="md:w-1/2 flex flex-col gap-5">
                    {/* Product Title */}
                    <div className="py-3 border-b">
                        <h2 className="text-2xl font-bold">My First Laptop</h2>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                    </div>

                    {/* Pricing Info */}
                    <div className="py-3 border-b">
                        <h3 className="text-[15px] font-bold">
                            Rs.570 or Rs.34/month
                        </h3>
                        <p className="text-sm text-gray-600">
                            Payment with 6-month insurance
                        </p>
                    </div>

                    {/* Color Selector */}
                    <div className="py-3 border-b">
                        <div className="flex gap-2 items-center">
                            <span className="text-sm font-medium">
                                Choose Color:
                            </span>
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform ${
                                        selectedColor === color.name
                                            ? "scale-110 border-black"
                                            : "border-gray-300"
                                    }`}
                                    style={{ backgroundColor: color.value }}
                                    onClick={() => setSelectedColor(color.name)}
                                >
                                    {selectedColor === color.name && (
                                        <Check
                                            size={16}
                                            className={
                                                color.name === "white"
                                                    ? "text-black"
                                                    : "text-white"
                                            }
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 py-3 border-b">
                        <div className="border border-gray-300 rounded-lg flex items-center p-2 w-full sm:w-40">
                            <button
                                className={`text-gray-500 px-3 ${
                                    productQuantity <= 1
                                        ? "opacity-50 cursor-not-allowed"
                                        : "cursor-pointer hover:text-gray-700"
                                }`}
                                onClick={decrementQuantity}
                                disabled={productQuantity <= 1}
                            >
                                <Minus size={20} />
                            </button>

                            <span className="text-lg font-semibold mx-3">
                                {productQuantity}
                            </span>

                            <button
                                className={`text-gray-500 px-3 ${
                                    productQuantity >= productStock
                                        ? "opacity-50 cursor-not-allowed"
                                        : "cursor-pointer hover:text-gray-700"
                                }`}
                                onClick={incrementQuantity}
                                disabled={productQuantity >= productStock}
                            >
                                <Plus size={20} />
                            </button>
                        </div>

                        <div className="text-sm">
                            <span>
                                Only{" "}
                                <span className="font-medium">
                                    {productStock - productQuantity} items
                                </span>{" "}
                                left
                            </span>
                        </div>
                    </div>

                    {/* Pincode Availability */}
                    <div className="flex flex-col sm:flex-row gap-3 py-3 border-b">
                        <Input
                            value={pincode}
                            placeholder="Enter your Pincode here..."
                            onChange={(e) => setPincode(e.target.value)}
                            className="w-full sm:max-w-xs"
                        />
                        <Button className="w-full sm:w-auto">
                            Check Availability
                        </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 py-3">
                        <Button
                            onClick={() => setpurchasedProduct(true)}
                            variant="outline"
                            className="w-full sm:w-auto"
                        >
                            Buy Now
                        </Button>
                        <Button className="w-full sm:w-auto">
                            Add to Cart
                        </Button>
                    </div>

                    {/* address bar */}

                    {purchasedProduct && (
                        <div className="flex flex-col gap-3 md:flex-row">
                            <Input
                                placeholder="Enter your home address..."
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <Button>Confirm Order</Button>
                        </div>
                    )}
                </div>
                {/* REVIEW COMPONENTS */}
            </div>
            <div className="flex items-start justify-start border">
                <ReviewCard />
            </div>
        </div>
    );
};

export default Products;
