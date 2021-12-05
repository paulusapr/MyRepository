import apiClient from '../apiClient';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getRepository = async (username: String) => {
  const result = await apiClient('get', `${API_BASE_URL}/users/${username}/repos`, {}, {});

  return result;
};
