import {
  ActionInterface,
  StateInterface,
} from '../../interfaces/ContextInterface';
import { ActionType } from './types';

export const PRODUCT_TYPES_INITIAL_STATE = {
  productTypesList: [],
};

const ProductTypesReducer = (
  state: StateInterface = PRODUCT_TYPES_INITIAL_STATE,
  action: ActionInterface
) => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCT_TYPES:
      return {
        ...state,
        productTypesList: action.payload,
      };
    case ActionType.CREATE_PRODUCT_TYPES:
      return {
        ...state,
        productTypesList: [action.payload, ...state.productTypesList],
      };
    default:
      return state;
  }
};

export default ProductTypesReducer;
