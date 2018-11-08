import React from "react";
import Item from "./item";

export default ({products}) => (
    <div>
        <section className="category-section">
            {products && products.map(Item)}
        </section>
    </div>
);