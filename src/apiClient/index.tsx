import axios from 'axios';

const apiClient = (method: string, link: string, body: Object, params: Object) => {
  const url = link;
  const headers = { 'Content-Type': 'application/json' };

  switch (method) {
    case 'get':
      return axios.get(url, { headers, params }).catch((error) => {
        throw error;
      });
    case 'post':
      return axios.post(url, body, { headers, params }).catch((error) => {
        throw error;
      });
    default:
      break;
  }

  return false;
};

export default apiClient;
