import { ActionType } from './types';

export const ActionFetchSales = (data: object) => {
  return { type: ActionType.FETCH_SALES, payload: data };
};

export const ActionCreateSales = (data: object) => {
  return { type: ActionType.CREATE_SALES, payload: data };
};

