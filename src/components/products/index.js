import React from "react";
import { Link } from "react-router-dom";

function Products({ products = [] }) {
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-3">
          {products.map((product) => {
            const {id} = product
            return (
              <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm m-10 border-opacity-50  cursor-pointer">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-container object-center w-full h-full block"
                    src={product.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-sm font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1 text-sm font-bold">${product.price}</p>
                  <h3 className="text-green-500 text-xs tracking-widest title-font mb-1">
                    Free Delivery
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
