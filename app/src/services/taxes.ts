import api from '.';

export const listTax = async () => {
  try {
    const { data } = await api().get('/tax');
    return data;
  } catch {}
};

export const createTax = async (obj: any) => {
  try {
    const { data } = await api().post('/tax', obj);
    return data;
  } catch {}
};

