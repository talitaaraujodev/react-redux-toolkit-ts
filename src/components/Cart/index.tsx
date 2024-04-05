import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CartItem } from "../CartItem";
import { Product } from "../../redux/cart/cartSlice";
import { selectProductsTotalPrice } from "../../redux/cart/cartSelector";
import { utils } from "../../utils";
import { CartEmpty } from "../CartEmpty";

export function Cart() {
  const { products } = useSelector((state: RootState) => state.cart);
  const productsTotale = useSelector(selectProductsTotalPrice);
  return (
    <div className="bg-white h-full w-64 z-10 fixed top-0 right-0 flex flex-col shadow-sm border-l-2 overflow-y-auto px-2 py-1">
      <h2 className="text-xl p-2 font-semibold border-b text-[#00b4ed]">
        Meu Carrinho
      </h2>
      <div className="flex flex-col">
        {products.length > 0 ? (
          products.map((product: Product) => (
            <CartItem
              product={product}
              imgLocale={product.imgUrl}
              key={product.id}
            />
          ))
        ) : (
          <CartEmpty />
        )}
      </div>

      <div className="flex justify-between items-center px-3 py-2 mt-auto">
        <strong className="text-xl font-semibold">Total:</strong>
        <span className="text-lg text-green-600 font-semibold">
          {utils.formatCoinBRL(productsTotale)}
        </span>
      </div>
    </div>
  );
}
