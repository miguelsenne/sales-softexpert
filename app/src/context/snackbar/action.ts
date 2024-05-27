import { ActionType } from './types';

export const ActionOpenSnackbar = (message: string) => {
  return { type: ActionType.OPEN_SNACKBAR, payload: message };
};

export const ActionCloseSnackbar = () => {
  return { type: ActionType.CLOSE_SNACKBAR };
};
