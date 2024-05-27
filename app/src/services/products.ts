import api from '.';

export const productsListing = async () => {
  try {
    const { data } = await api().get('/products');
    return data;
  } catch {}
};

export const createProduct = async (obj: any) => {
  try {
    const { data } = await api().post('/products', obj);
    return data;
  } catch {}
};
