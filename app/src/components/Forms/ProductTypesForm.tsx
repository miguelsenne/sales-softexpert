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
import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/context';
import { listTax } from '../../services/taxes';
import { ActionFetchTaxes } from '../../context/taxes/action';
import { createProductType } from '../../services/productTypes';
import { ActionCreateProductTypes } from '../../context/productTypes/action';
import { ActionOpenSnackbar } from '../../context/snackbar/action';

export const ProductTypesForm = () => {
  const [taxId, setTaxId] = React.useState('');
  const [name, setName] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTaxId(event.target.value as string);
  };

  const {
    state: {
      taxes: { taxesList },
    },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      try {
        const data = await listTax();
        dispatch(ActionFetchTaxes(data));
      } catch { }
    })();
  }, []);

  const saveTypeProduct = async () => {
    const data = await createProductType({ name: name, tax_id: taxId });
    dispatch(ActionCreateProductTypes(data));
    dispatch(ActionOpenSnackbar('Tipo de Produto adicionado com sucesso'));
    setTaxId('');
    setName('');
  }

  return (
    <Paper sx={{ padding: '10px', marginBottom: 2 }}>
      <div style={{ marginBottom: 10 }}>
        <Typography variant="h6">Tipo de Produto</Typography>
        <Divider />
      </div>
      <InputLabel id="product_type">Imposto</InputLabel>
      <Select
        sx={{ width: '100%' }}
        labelId="product_type"
        label="Imposto"
        value={taxId}
        variant="filled"
        onChange={handleChange}
      >
        {taxesList.length > 0 &&
          taxesList.map((item: any) => {
            return <MenuItem value={item.id}>{item.percentage} %</MenuItem>;
          })}
      </Select>
      <TextField
        variant="filled"
        placeholder="Nome do tipo do produto"
        sx={{ width: '100%' }}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button onClick={() => saveTypeProduct()} variant="contained" disableElevation sx={{ width: '100%' }}>
        Adicionar
      </Button>
    </Paper>
  );
};
