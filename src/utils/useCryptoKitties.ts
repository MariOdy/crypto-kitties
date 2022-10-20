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

type SortableProps = `id` | `name` | `category` | `price`;
type SortableDirection = `asc` | `desc`;

interface GetDataProps {
  pageParam?: number;
  perPage?: number;
  sortBy?: SortableProps;
  sortDir?: SortableDirection;
}

/** Fetches cryptoKitties data from the API */
const getData = async ({
  pageParam = 0,
  perPage = 20,
  sortBy,
  sortDir,
}: GetDataProps): Promise<CryptoKittiesData> => {
  let url = `https://ftl-cryptokitties.fly.dev/api/crypto_kitties?page=${pageParam}&per_page=${perPage}`;
  if (sortBy) url += `&sort_by=${sortBy}`;
  if (sortDir) url += `&sort_dir=${sortDir}`;

  const res = await axios.get<CryptoKittiesData>(url);
  return res.data;
};

interface UseCryptoKittiesProps
  extends UseInfiniteQueryOptions<CryptoKittiesData> {
  perPage?: number;
  sortBy?: SortableProps;
  sortDir?: SortableDirection;
}

/** Returns paginated cryptoKitties data */
const useCryptoKitties = ({
  perPage = 20,
  sortBy,
  sortDir,
  ...options
}: UseCryptoKittiesProps = {}) => {
  const { data, ...props } = useInfiniteQuery<CryptoKittiesData>(
    ["crypto_kitties", perPage, sortBy, sortDir],
    ({ pageParam = 1 }) =>
      getData({ pageParam: pageParam || 1, perPage, sortBy, sortDir }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.pagination_info.next_page || undefined,
      ...options,
    }
  );

  const cats = useMemo(() => {
    if (!data) return null;

    const catsWithDuplicates = data.pages.map((page) => page.cats).flat();

    /** Remove duplicates */
    const ids = new Set<number>();

    const catsWithoutDuplicates = catsWithDuplicates.filter((cat) => {
      if (ids.has(cat.id)) return false;
      ids.add(cat.id);
      return true;
    });

    return catsWithoutDuplicates;
  }, [data]);

  return {
    data,
    cats,
    ...props,
  };
};

export default useCryptoKitties;
