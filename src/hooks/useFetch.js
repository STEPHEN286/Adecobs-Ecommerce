import { apiBaseUrl } from "../utils/constants";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Fetch Function
const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data?.message || "An error occurred while fetching data."
    );
  }
};


export function useFetch(endpoint = "") {
  const query = useQuery({
    queryKey: [endpoint],
    queryFn: () => fetchData(endpoint),
    enabled: !!endpoint, 
    retry: 1, 
    staleTime: 300000,
  });

  
  const { data, error, isLoading } = query;

  return { data, error, isLoading }; 
}
