import React from "react";

const ProductList: React.FC<{ products: string[] }> = ({ products }) => {
    return (
        <div>
            {products.map((p, i) => (
                <div key={i}>{p}</div>
            ))}
        </div>
    );
};

export default ProductList;
