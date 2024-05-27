import {
  ActionInterface,
  StateInterface,
} from '../../interfaces/ContextInterface';
import { ActionType } from './types';

export const SNACKBAR_INITIAL_STATE = {
  open: false,
  message: '',
};

const SnackReducer = (
  state: StateInterface = SNACKBAR_INITIAL_STATE,
  action: ActionInterface
) => {
  switch (action.type) {
    case ActionType.OPEN_SNACKBAR:
      return {
        ...state,
        open: true,
        message: action.payload,
      };
    case ActionType.CLOSE_SNACKBAR:
      return {
        ...state,
        open: false,
        message: '',
      };
    default:
      return state;
  }
};

export default SnackReducer;
