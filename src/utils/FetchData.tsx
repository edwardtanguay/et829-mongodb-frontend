/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const url = 'localhost:7575';

export const FetchSingleEndpoint = async (endpoint: string) => {
  if (!endpoint) {
    throw new Error(`URL is required`);
  }
  try {
    const response = await axios.get(`http://${url}/${endpoint}`);
    const data = response.data;
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
