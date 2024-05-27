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

export default () => {
  const {
    state: {
      products: { productList },
    },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      try {
        const data = await productsListing();
        dispatch(ActionFetchProducts(data));
      } catch {}
    })();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Produto', width: 130 },
    { field: 'price', headerName: 'Preço', width: 130 },
  ];

  return (
    <Box display="flex" flex={1} gap={2} marginTop={5}>
      <Box flex={1}>
        <ProductForm />
        <ProductTypesForm />
        <TaxForm />
      </Box>
      <Box flex={2}>
        <DataTable rows={productList} columns={columns} loading={!productList.length}  />
      </Box>
    </Box>
  );
};
