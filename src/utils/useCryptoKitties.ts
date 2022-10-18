import React, { useEffect } from "react";
import axios from "axios";
import type Cat from "../interfaces/cat";
import type PaginationInfo from "../interfaces/paginationInfo";

interface CryptoKittiesData {
  cats: Cat[];
  pagination_info: PaginationInfo;
}

const useCryptoKitties = () => {
  const [data, setData] = React.useState<CryptoKittiesData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<CryptoKittiesData>(
        `https://ftl-cryptokitties.fly.dev/api/crypto_kitties`
      );
      setData(response.data);
    };
    getData();
  }, []);

  return data
};

export default useCryptoKitties;
