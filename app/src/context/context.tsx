import React, { createContext, useMemo, useReducer } from 'react';
import { AppContextInterface } from '../interfaces/ContextInterface';
import combineReducers from 'react-combine-reducers';

import productsReducer, { PRODUCTS_INITIAL_STATE } from './products/reducer';
import ProductTypesReducer, { PRODUCT_TYPES_INITIAL_STATE } from './productTypes/reducer';
import TaxesReducer, { TAXES_INITIAL_STATE } from './taxes/reducer';
import SalesReducer, { SALES_INITIAL_STATE } from './sales/reducer';
import SnackReducer, { SNACKBAR_INITIAL_STATE } from './snackbar/reducer';

const [rootReducer, INITIAL_STATE] = combineReducers({
  products: [productsReducer, PRODUCTS_INITIAL_STATE],
  productTypes: [ProductTypesReducer, PRODUCT_TYPES_INITIAL_STATE],
  taxes: [TaxesReducer, TAXES_INITIAL_STATE],
  sales: [SalesReducer, SALES_INITIAL_STATE],
  snack: [SnackReducer, SNACKBAR_INITIAL_STATE],
});

export const AppContext = createContext({} as AppContextInterface);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(rootReducer, INITIAL_STATE);
  const ctxValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export default AppContext;
