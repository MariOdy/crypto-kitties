import React, { useEffect } from "react";
import axios from "axios";
import type PaginationInfo from "./interfaces/paginationInfo";
import type Cat from "./interfaces/cat";

interface CryptoKittiesData {
  cats: Cat[];
  pagination_info: PaginationInfo;
}

const App: React.FC = () => {
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

  return <div className="App"></div>;
};

export default App;
