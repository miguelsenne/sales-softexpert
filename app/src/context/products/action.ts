import { ActionType } from './types';

export const ActionFetchProducts = (data: object) => {
  return { type: ActionType.FETCH_PRODUCTS, payload: data };
};

export const ActionCreateProducts = (data: object) => {
  return { type: ActionType.CREATE_PRODUCTS, payload: data };
};
