import {
  ActionInterface,
  StateInterface,
} from '../../interfaces/ContextInterface';
import { ActionType } from './types';

export const PRODUCTS_INITIAL_STATE = {
  productList: [],
};

const ProductsReducer = (
  state: StateInterface = PRODUCTS_INITIAL_STATE,
  action: ActionInterface
) => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      };
    case ActionType.CREATE_PRODUCTS:
      return {
        ...state,
        productList: [action.payload, ...state.productList],
      };
    default:
      return state;
  }
};

export default ProductsReducer;
