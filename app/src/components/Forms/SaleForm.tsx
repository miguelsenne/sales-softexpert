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
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/context';
import { productsListing } from '../../services/products';
import { ActionFetchProducts } from '../../context/products/action';
import { createSale } from '../../services/sales';
import { ActionCreateSales } from '../../context/sales/action';
import { ActionOpenSnackbar } from '../../context/snackbar/action';

type CartItem = {
  name?: string;
  price?: string;
  qty?: string;
  type_id?: string;
};

export const SaleForm = () => {
  const [productId, setProductId] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [qty, setQty] = useState('');

  const {
    state: {
      products: { productList },
    },
    dispatch,
  } = useContext(AppContext);

  const handleChange = (event: SelectChangeEvent) => {
    setProductId(event.target.value as string);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await productsListing();
        dispatch(ActionFetchProducts(data));
      } catch { }
    })();
  }, []);

  const handleCreateSale = async () => {
    const data = await createSale({ products: cart });
    dispatch(ActionCreateSales(data));
    dispatch(ActionOpenSnackbar('Venda registrada com sucesso!'));
    setProductId('');
    setQty('');
  };

  const handleSaveCart = () => {
    const selectedProduct = productList.find(
      (product: { id: string }) => product.id == productId
    );

    setCart([
      {
        name: selectedProduct.name,
        price: selectedProduct.price,
        qty: qty,
        type_id: selectedProduct.type_id,
      },
      ...cart,
    ]);
    dispatch(ActionOpenSnackbar('Produto adicionado!'));
    setProductId('');
    setQty('');
  };
  return (
    <>
      <Paper sx={{ padding: '10px', marginBottom: 2 }}>
        <div style={{ marginBottom: 10 }}>
          <Typography variant="h6">Registrar venda</Typography>
          <Divider />
        </div>
        <InputLabel id="product_type">Tipo do produto</InputLabel>
        <Select
          sx={{ width: '100%' }}
          labelId="product_type"
          label="Tipo do produto"
          value={productId}
          variant="filled"
          onChange={handleChange}
        >
          {productList.length > 0 &&
            productList.map((item: any) => {
              return <MenuItem value={item.id}>{item.name}</MenuItem>;
            })}
        </Select>
        <TextField
          variant="filled"
          placeholder="Quantidade"
          sx={{ width: '100%' }}
          value={qty}
          onChange={e => {
            setQty(e.target.value);
          }}
        />
        <Button
          variant="contained"
          disableElevation
          sx={{ width: '100%' }}
          onClick={() => handleSaveCart()}
        >
          Adicionar Produto
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCreateSale()}
          disableElevation
          sx={{ width: '100%' }}
        >
          Finalizar venda
        </Button>
      </Paper>
    </>
  );
};
