import axios, { AxiosRequestConfig } from "axios";

const request = async (url: string, options?: AxiosRequestConfig) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllCharacters = (pageNumber: number) =>
  request(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);

export { getAllCharacters };
