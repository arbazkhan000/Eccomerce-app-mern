import ProductList from "@/_components/ProductList";
import FilterMenu from "./FilterMenu";
import HeroCarousel from "./HeroCarousel";

const HomePage = () => {
    return (
        <div className="px-5">
            {/* Carousel */}
            <HeroCarousel />

            {/* Dropdown filters */}
            <div className="py-10">
                <FilterMenu />
            </div>

            {/* Product */}
            <ProductList />
        </div>
    );
};

export default HomePage;
