import api from '../api/axios';

export const getClothes = (filters = {}) => {
  // filters: { talla, color, q, page, limit }
  return api.get('/clothes', { params: filters }).then(res => res.data);
};

export const createCloth = (payload) => api.post('/clothes', payload).then(r => r.data);
export const updateCloth = (id, payload) => api.put(`/clothes/${id}`, payload).then(r => r.data);
export const deleteCloth = (id) => api.delete(`/clothes/${id}`).then(r => r.data);
