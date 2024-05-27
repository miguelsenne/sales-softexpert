import {
  ActionInterface,
  StateInterface,
} from '../../interfaces/ContextInterface';
import { ActionType } from './types';

export const TAXES_INITIAL_STATE = {
  taxesList: [],
};

const TaxesReducer = (
  state: StateInterface = TAXES_INITIAL_STATE,
  action: ActionInterface
) => {
  switch (action.type) {
    case ActionType.FETCH_TAXES:
      return {
        ...state,
        taxesList: action.payload,
      };
    case ActionType.CREATE_TAX:
      return {
        ...state,
        taxesList: [action.payload, ...state.taxesList],
      };
    default:
      return state;
  }
};

export default TaxesReducer;
