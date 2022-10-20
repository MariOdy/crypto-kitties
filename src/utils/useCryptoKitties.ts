import axios from "axios";
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import type Cat from "interfaces/cat";
import type PaginationInfo from "interfaces/paginationInfo";
import { useMemo } from "react";

interface CryptoKittiesData {
  cats: Cat[];
  pagination_info: PaginationInfo;
}

/** Fetches cryptoKitties data from the API */
const getData = async ({
  pageParam = 0,
  perPage = 20,
}): Promise<CryptoKittiesData> => {
  const res = await axios.get<CryptoKittiesData>(
    `https://ftl-cryptokitties.fly.dev/api/crypto_kitties?page=${pageParam}&per_page=${perPage}`
  );
  return res.data;
};

interface UseCryptoKittiesProps
  extends UseInfiniteQueryOptions<CryptoKittiesData> {
  perPage?: number;
}

/** Returns paginated cryptoKitties data */
const useCryptoKitties = ({
  perPage = 20,
  ...options
}: UseCryptoKittiesProps = {}) => {
  const { data, ...props } = useInfiniteQuery<CryptoKittiesData>(
    ["crypto_kitties", perPage],
    ({ pageParam }) => getData({ pageParam, perPage }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.pagination_info.next_page || undefined,
      ...options,
    }
  );

  const cats = useMemo(
    () => data?.pages.map((page) => page.cats).flat(),
    [data]
  );

  return {
    data,
    cats,
    ...props,
  };
};

export default useCryptoKitties;
