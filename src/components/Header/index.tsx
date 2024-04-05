import { Link } from "react-router-dom";
import { Cart } from "../Cart";
import { useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cartSelector";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
export function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  const productsCount = useSelector(selectProductsCount);
  return (
    <div
      className={`${
        isSidebarOpen
          ? "mr-[254px]  bg-white w-100 p-3 h-[60px] flex justify-between items-center border-b border-slate-200 transition-all duration-200"
          : "bg-white w-100 p-3 h-[60px] flex justify-between items-center border-b border-slate-200 transition-all duration-200"
      }`}
    >
      <Link className="cursor-pointer" to={"/"}>
        <img
          src={"images/logo.svg"}
          alt="Logo"
          height={"60px"}
          width={"160px"}
        />
      </Link>
      <button
        className="flex items-center"
        type="button"
        onClick={toggleSidebar}
      >
        <img
          src={"icons/cart-icon.svg"}
          alt="Icone cart"
          width={"32px"}
          height={"32px"}
        />
        <span className="align-top w-7 bg-[#00B4ED] text-white font-bold rounded-full p-0.5 ml-[-6px] mb-[14px]">
          {productsCount}
        </span>
      </button>
      {isSidebarOpen && <Cart />}
    </div>
  );
}
