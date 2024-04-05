import { combineReducers, Reducer } from "redux";
import userReducer, { UserState } from "./user/userSlice";
import cartReducer, { CartState } from "./cart/cartSlice";

export interface RootState {
  user: UserState;
  cart: CartState;
}

export const rootReducer: Reducer<RootState> = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
