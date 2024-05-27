import {
  Button,
  Divider,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/context';
import { listProductType } from '../../services/productTypes';
import { ActionFetchProductsTypes } from '../../context/productTypes/action';
import { createProduct } from '../../services/products';
import { ActionCreateProducts } from '../../context/products/action';
import { ActionOpenSnackbar } from '../../context/snackbar/action';

export const ProductForm = () => {
  const [productTypeId, setproductTypeId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const {
    state: {
      productTypes: { productTypesList },
    },
    dispatch,
  } = useContext(AppContext);

  const handleChange = (event: SelectChangeEvent) => {
    setproductTypeId(event.target.value as string);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await listProductType();
        dispatch(ActionFetchProductsTypes(data));
      } catch {}
    })();
  }, []);

  const handleSaveProduct = async () => {
    const data = await createProduct({
      name: name,
      price: price,
      type_id: productTypeId,
    });
    dispatch(ActionCreateProducts(data));
    dispatch(ActionOpenSnackbar('Produto adicionado com sucesso!'));
    setproductTypeId('');
    setName('');
    setPrice('');
  };

  return (
    <Paper sx={{ padding: '10px', marginBottom: 2 }}>
      <div style={{ marginBottom: 10 }}>
        <Typography variant="h6">Produtos</Typography>
        <Divider />
      </div>
      <InputLabel id="product_type">Tipo do produto</InputLabel>
      <Select
        sx={{ width: '100%' }}
        labelId="product_type"
        label="Tipo do produto"
        value={productTypeId}
        variant="filled"
        onChange={handleChange}
      >
        {productTypesList.length > 0 &&
          productTypesList.map((item: any) => {
            return <MenuItem value={item.id}>{item.name}</MenuItem>;
          })}
      </Select>
      <TextField
        variant="filled"
        placeholder="Nome do Produto"
        sx={{ width: '100%' }}
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <TextField
        variant="filled"
        placeholder="Preço"
        sx={{ width: '100%' }}
        value={price}
        onChange={e => {
          setPrice(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => handleSaveProduct()}
        disableElevation
        sx={{ width: '100%' }}
      >
        Adicionar
      </Button>
    </Paper>
  );
};
