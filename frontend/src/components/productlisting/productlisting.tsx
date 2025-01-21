import FilterHeader from "./filterheader";
import ProductList from "./productlist";

const ProductListing = () => {
    return (
        <>
            <FilterHeader />
            <ProductList products={["1","2","3"]} />
        </>
    );
};

export default ProductListing;
