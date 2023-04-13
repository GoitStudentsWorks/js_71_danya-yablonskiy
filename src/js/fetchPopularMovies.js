import axios from "axios";
import { pathParams } from "./options";

export default async function fetchPopularMovies(page) {
  const { BASE_URL, API_KEY, media_type, time_window} = pathParams;
  try {
    const response = await
          axios.get(`${BASE_URL}/trending/${media_type}/${time_window}?api_key=${API_KEY}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error(error);
    }
};




