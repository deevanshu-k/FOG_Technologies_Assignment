import FilterHeader from "./filterheader";
import ProductList from "./productlist";
import Product from "../../interfaces/product.interface";
import Pagination from "./pagination";
import { useState } from "react";

const data: Product[] = [
    {
        id: 1,
        brandName: "Syltherine",
        productName: "Stylish Cafe Chair",
        category: "",
        price: 3500000,
        discountPrice: 2500000,
        image: "http://127.0.0.1:9000/public/syltherine.svg",
        latest: false,
    },
    {
        id: 2,
        brandName: "Leviosa",
        productName: "Stylish Chair",
        category: "",
        price: 2500000,
        discountPrice: null,
        image: "http://127.0.0.1:9000/public/leviosa.svg",
        latest: false,
    },
    {
        id: 3,
        brandName: "Lolito",
        productName: "Luxury Big Sofa",
        category: "",
        price: 1400000,
        discountPrice: 700000,
        image: "http://127.0.0.1:9000/public/lolito.svg",
        latest: false,
    },
    {
        id: 4,
        brandName: "Respira",
        productName: "Outdoor Bar Table and Stool",
        category: "",
        price: 500000,
        discountPrice: null,
        image: "http://127.0.0.1:9000/public/respira.svg",
        latest: true,
    },
];

const ProductListing = () => {
    const [currentpage, setCurrentPage] = useState(1);
    return (
        <>
            <FilterHeader />
            <ProductList products={data} />
            <Pagination
                currentpage={currentpage}
                setCurrentPage={setCurrentPage}
                totalpages={10}
            />
        </>
    );
};

export default ProductListing;
