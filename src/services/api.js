import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const getPictures = async (searchValue, page) => {
  const params = new URLSearchParams({
    client_id: "kduvWKaDbJJe-YrgQHXv0XKXbR3P7WX3_p4xvX5iQGA",
    query: searchValue,
    page: page,
    per_page: 12,
  });
  const { data } = await axios.get(`search/photos/?${params}`);
  return data;
};
