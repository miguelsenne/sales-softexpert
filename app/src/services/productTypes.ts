import api from '.';

export const listProductType = async () => {
  try {
    const { data } = await api().get('/productsType');
    return data;
  } catch {}
};

export const createProductType = async (obj: any) => {
  try {
    const { data } = await api().post('/productsType', obj);
    return data;
  } catch {}
};

