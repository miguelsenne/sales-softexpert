import { Button, Divider, Paper, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import AppContext from '../../context/context';
import { createTax } from '../../services/taxes';
import { ActionCreateTax } from '../../context/taxes/action';
import { ActionOpenSnackbar } from '../../context/snackbar/action';

export const TaxForm = () => {
  const [percentage, setPercentage] = useState('');
  const {
    dispatch,
  } = useContext(AppContext);

  const handleSaveTax = async () => {
    const data = await createTax({
      percentage: percentage,
    });
    dispatch(ActionCreateTax(data));
    dispatch(ActionOpenSnackbar('Imposto adicionado com sucesso!'));
    setPercentage('');
  };

  return (
    <Paper sx={{ padding: '10px', marginBottom: 2 }}>
      <div style={{ marginBottom: 10 }}>
        <Typography variant="h6">Imposto</Typography>
        <Divider />
      </div>
      <TextField
        variant="filled"
        placeholder="porcentagem"
        sx={{ width: '100%' }}
        value={percentage}
        onChange={e => {
          setPercentage(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => handleSaveTax()}
        disableElevation
        sx={{ width: '100%' }}
      >
        Adicionar
      </Button>
    </Paper>
  );
};
