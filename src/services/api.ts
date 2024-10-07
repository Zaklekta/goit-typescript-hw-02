import axios, { AxiosResponse } from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
import { ImageData } from "../App.types";
import { UnsplashResponse } from "../App.types";
// interface ImageData {
//   id: string;
//   urls: {
//     small: string;
//     regular: string;
//     full: string;
//   };
// }
// interface UnsplashResponse {
//   results: ImageData[];
//   total: number;
//   total_pages: number;
// }
export const getPictures = async (
  searchValue: string,
  page: number
): Promise<UnsplashResponse> => {
  const params = new URLSearchParams({
    client_id: "kduvWKaDbJJe-YrgQHXv0XKXbR3P7WX3_p4xvX5iQGA",
    query: searchValue,
    page: page.toString(),
    per_page: "12",
  });
  const response: AxiosResponse<UnsplashResponse> = await axios.get(
    `search/photos/?${params}`
  );
  return response.data;
};
