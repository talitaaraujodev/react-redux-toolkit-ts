import React from "react";
import { ProductItem } from "../../components/ProductItem";
import { products } from "../../data";

export function HomePage() {
  return (
    <React.Fragment>
      <h2 className="text-lg uppercase font-semibold text-center py-4 text-[#00B4ED]">
        Produtos
      </h2>
      <div className="container my-5  h-100 w-100 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 p-2 justify-items-center">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 0,
                imgUrl: product.imgUrl,
              }}
              imgLocale={product.imgUrl}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}
