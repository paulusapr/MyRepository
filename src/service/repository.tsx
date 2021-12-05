import apiClient from '../apiClient';

export const getRepository = async (username: String) => {
  const result = await apiClient('get', `https://api.github.com/users/${username}/repos`, {}, {});

  return result;
};
