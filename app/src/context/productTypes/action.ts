import { ActionType } from './types';

export const ActionFetchProductsTypes = (data: object) => {
  return { type: ActionType.FETCH_PRODUCT_TYPES, payload: data };
};

export const ActionCreateProductTypes = (data: object) => {
  return { type: ActionType.CREATE_PRODUCT_TYPES, payload: data }; 
}