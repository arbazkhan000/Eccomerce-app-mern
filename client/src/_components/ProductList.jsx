import ProductCard from "@/pages/ProductCard";

const ProductList = () => {
    const productDataCard = [
        {
            id: 1,
            name: "Product 1",
            price: 10.99,
            image: "https://picsum.photos/200/300",
            description: "This is product 1.",
        },
        {
            id: 2,
            name: "Product 2",
            price: 15.99,
            image: "https://picsum.photos/200/300",
            description: "This is product 2.",
        },
        {
            id: 3,
            name: "Product 3",
            price: 8.99,
            image: "https://picsum.photos/200/300",
            description: "This is product 3.",
        },
        {
            id: 4,
            name: "Product 4",
            price: 12.99,
            image: "https://picsum.photos/200/300",
            description: "This is product 4.",
        },
    ];

    return (
        <div className="container mx-auto rounded-lg shadow-md   bg-gray-50 p-2 ">
            <div className="grid gap-10  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {productDataCard.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
