import { useState } from "react";
import ButtonGo from '@/comps/ButtonGo'

const QueryNFTCollection = () => {
  const [receipt, setReceipt] = useState(null);
  const apiHandler = async () => {
    try {
      const response = await fetch("/api/queryNFTCollection");
      const data = await response.json();
      setReceipt(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="space-y-4">
      <h2>Query NFT Collection</h2>
      <ButtonGo onClick={apiHandler} />
      <pre>{receipt ? JSON.stringify(receipt, null, 8) : "{...}"}</pre>
    </div>
  );
};

export default function Page() {

  return (
    <div className="container mx-auto mt-10 px-4">
      <QueryNFTCollection />
    </div>
  );
}
