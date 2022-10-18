import React, { useEffect } from "react";
import axios from "axios";

interface CryptoKittiesData {
  cats: {
    available: boolean;
    category: string;
    created_at: string;
    id: number;
    image_url: string;
    name: string;
    price: number;
    updated_at: string;
  }[];
  pagination_info: {
    current_page: number;
    limit_per_page: number;
    next_page: number;
    prev_page: null;
    total: number;
    total_pages: number;
  };
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
