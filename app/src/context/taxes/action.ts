import { ActionType } from './types';

export const ActionFetchTaxes = (data: object) => {
  return { type: ActionType.FETCH_TAXES, payload: data };
};

export const ActionCreateTax = (data: object) => {
  return { type: ActionType.CREATE_TAX, payload: data }; 
}