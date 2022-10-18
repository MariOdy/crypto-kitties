import axios from "axios";
import type Cat from "../interfaces/cat";
import type PaginationInfo from "../interfaces/paginationInfo";
import { useQuery } from "@tanstack/react-query";

const getData = () =>
  axios.get<CryptoKittiesData>(
    `https://ftl-cryptokitties.fly.dev/api/crypto_kitties`
  );

interface CryptoKittiesData {
  cats: Cat[];
  pagination_info: PaginationInfo;
}

const useCryptoKitties = () => {
  const { data, ...props } = useQuery(["crypto_kitties"], getData);

  return {
    data,
    cats: data?.data?.cats,
    pagination_info: data?.data?.pagination_info,
    ...props,
  };
};

export default useCryptoKitties;
