import axios, { AxiosRequestConfig } from "axios";

const request = async (url: string, options?: AxiosRequestConfig) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllCharacters = (pageNumber: number, query?: string) =>
  request(
    `https://rickandmortyapi.com/api/character/?page=${pageNumber}${
      query ? `&name=${query}` : ""
    }`
  );

const getCharacterById = (id: number) =>
  request(`https://rickandmortyapi.com/api/character/${id}`);

export { getAllCharacters, getCharacterById };
