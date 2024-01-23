import axios from 'axios';

const url = '';

export const FetchSingleEndpoint = async (endpoint: string) => {
  if (!endpoint) {
    throw new Error(`URL is required`);
  }
  try {
    const response = await axios.get(`${url}/${endpoint}`);
    const data = response.data;
    return data.events;
  } catch (error) {
    throw new Error(error);
  }
};
