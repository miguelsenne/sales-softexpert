import {
  ActionInterface,
  StateInterface,
} from '../../interfaces/ContextInterface';
import { ActionType } from './types';

export const SALES_INITIAL_STATE = {
  salesList: [],
};

const SalesReducer = (
  state: StateInterface = SALES_INITIAL_STATE,
  action: ActionInterface
) => {
  switch (action.type) {
    case ActionType.FETCH_SALES:
      return {
        ...state,
        salesList: action.payload,
      };
    case ActionType.CREATE_SALES:
      return {
        ...state,
        salesList: [action.payload, ...state.salesList],
      };
    default:
      return state;
  }
};

export default SalesReducer;
