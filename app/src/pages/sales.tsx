import React, { useContext, useEffect } from 'react';
import {
  Box,
} from '@mui/material';
import DataTable from '../components/DataTable/DataTable';
import AppContext from '../context/context';
import { productsListing } from '../services/products';
import { ActionFetchProducts } from '../context/products/action';
import { ProductForm } from '../components/Forms/ProductForm';
import { ProductTypesForm } from '../components/Forms/ProductTypesForm';
import { TaxForm } from '../components/Forms/TaxForm';
import { SaleForm } from '../components/Forms/SaleForm';
import SalesTable from '../components/DataTable/SalesTable';
import { listSale } from '../services/sales';
import { ActionFetchSales } from '../context/sales/action';

export default () => {
  const {
    state: {
      sales: { salesList },
    },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      try {
        const data = await listSale();
        dispatch(ActionFetchSales(data));
      } catch {}
    })();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Produto', width: 130 },
    { field: 'qty', headerName: 'Quantidade', width: 130 },
  ];

  return (
    <Box display="flex" flex={1} gap={2} marginTop={5}>
      <Box flex={1}>
        <SaleForm />
        
      </Box>
      <Box flex={2}>
        <SalesTable rows={salesList} />
      </Box>
    </Box>
  );
};
