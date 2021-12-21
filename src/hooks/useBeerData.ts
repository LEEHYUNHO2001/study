import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { Beer_API_ENDPOINT } from "../constants";

export const useBeerData = (path: string) => {
  return useSWR(`${Beer_API_ENDPOINT}${path}`, fetcher);
};
