
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiBaseUrl } from "../utils/constants";


const fetchData = async (endpoint) => {
  try {



    console.log(`${apiBaseUrl}`);

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

  
  const { data, error, isLoading , isError } = query;
  if (isError) {
    console.error("Error fetching data:", error);
  }
  return { data, error, isLoading }; 
}
