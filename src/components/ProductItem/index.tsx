import { useDispatch } from "react-redux";
import { Product, addProduct } from "../../redux/cart/cartSlice";
import { utils } from "../../utils";

interface ProductItemProps {
  product: Product;
  imgLocale: string;
}

export function ProductItem({ product, imgLocale }: ProductItemProps) {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProduct(product));
  };
  return (
    <div className="bg-white border border-[#00B4ED] rounded-sm flex flex-col p-2 w-72 cursor-pointer transition-all duration-200 hover:scale-110 ">
      <div className="flex items-center justify-end">
        <div className="w-28 bg-green-500 flex  justify-center items-center rounded-md py-1">
          <span className="text-sm text-white font-normal">Promoção</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={imgLocale}
          alt={product.name}
          width={"200px"}
          height={"200px"}
        />
        <h2 className="text-center text-lg font-semibold">{product.name}</h2>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium line-through text-[rgb(165,165,165)]">
            {utils.formatCoinBRL(product.price + 2)}
          </span>
          <span className="text-2xl text-[#00B4ED] font-semibold">
            {utils.formatCoinBRL(product.price)}
          </span>
        </div>
        <button
          className="outline-none bg-[#00B4ED] p-2 text-white font-semibold flex items-center rounded-lg mt-2 hover:opacity-80 transition-all cursor-pointer"
          type="button"
          onClick={handleProductClick}
        >
          <img src={"icons/cart-icon-white.svg"} alt={"Icon carinho"} />
          Adicionar item
        </button>
      </div>
    </div>
  );
}
