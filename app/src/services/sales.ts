import api from '.';

export const listSale = async () => {
  try {
    const { data } = await api().get('/sales');
    return data;
  } catch {}
};

export const createSale = async (obj: any) => {
  try {
    const { data } = await api().post('/sales', obj);
    return data;
  } catch {}
};

