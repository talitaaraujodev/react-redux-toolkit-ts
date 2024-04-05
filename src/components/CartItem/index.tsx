import { useDispatch } from "react-redux";
import {
  Product,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProduct,
} from "../../redux/cart/cartSlice";
import { utils } from "../../utils";

interface CartItemProps {
  product: Product;
  imgLocale: string;
}
export function CartItem({ product, imgLocale }: CartItemProps) {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProduct(product.id));
  };
  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id));
  };
  return (
    <div className="flex flex-col border-b justify-start items-start">
      <div className="flex items-center ">
        <img
          src={imgLocale}
          alt={product.name}
          width={"80px"}
          height={"80px"}
        />
        <div className="flex flex-col space-x-1">
          <div className="flex items-center space-x-1">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <button
              type="button"
              className="cursor-pointer"
              onClick={handleRemoveClick}
            >
              <img
                src="icons/delete.svg"
                alt="Icone remove"
                className="text-red-600"
                width={"26px"}
                height={"26px"}
              />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <strong className="text-sm">{product.quantity}x</strong>
            <span className="text-[#A5A5A5] text-base font-semibold">
              {utils.formatCoinBRL(product.price)}
            </span>
          </div>
          <div className="flex space-x-2 items-center">
            <button
              className="text-green-600 font-bold text-2xl"
              onClick={handleIncreaseClick}
            >
              +
            </button>
            <span className="text-xl text-[#A5A5A5] font-normal">
              {product.quantity}
            </span>
            <button
              className="text-red-600 font-bold text-2xl"
              onClick={handleDecreaseClick}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
