import { RootState } from "../rootReducer";

export const selectProductsCount = (rootReducer: RootState) => {
  return rootReducer.cart.products.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );
};

export const selectProductsTotalPrice = (rootReducer: RootState) => {
  return rootReducer.cart.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
};
