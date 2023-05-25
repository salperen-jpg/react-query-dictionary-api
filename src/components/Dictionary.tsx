import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_ENDPOINT } from "../utils/constants";
import Keyword from "./Keyword";
import DifferentMeanings from "./DifferentMeanings";
import { useDictionaryApp } from "../context";
const Dictionary = () => {
  const { searchQuery } = useDictionaryApp();
  const { isLoading, data, isError } = useQuery({
    queryKey: ["word", searchQuery],
    queryFn: async () => {
      const response = await axios(`${API_ENDPOINT}/${searchQuery}`);
      return response.data;
    },
  });

  if (isLoading) {
    return <div className='loading'></div>;
  }

  if (isError) {
    return <div className='section-center error'>No Definitions Found</div>;
  }

  return (
    <main>
      <Keyword definition={data} />
      <DifferentMeanings definition={data} />
    </main>
  );
};
export default Dictionary;
