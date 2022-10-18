import React from "react";
import useCryptoKitties from "utils/useCryptoKitties";

const Catalog: React.FC = () => {
  const { cats, isLoading } = useCryptoKitties();

  return (
    <div className="Catalog">
      {isLoading && <div>Loading...</div>}
      <ul>
        {cats?.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
