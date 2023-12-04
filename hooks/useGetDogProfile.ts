import DogsAPIs from "@/apis/dogs";
import { useQuery } from "@tanstack/react-query";

const useGetDogProfile = (id: number) => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['dog-profile'],
    queryFn: () => DogsAPIs.getDogProfile(id)
  })

  return { data, error, isLoading, isFetching }
}

export default useGetDogProfile