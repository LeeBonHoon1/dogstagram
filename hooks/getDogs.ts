import DogsAPIs from "@/apis/dogs";
import { useQuery } from "@tanstack/react-query";

const useGetDogs = () => {
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ['dogs'],
    queryFn: () => DogsAPIs.getDogs()
  })

  return { data, isLoading, error, isFetching }
}

export default useGetDogs