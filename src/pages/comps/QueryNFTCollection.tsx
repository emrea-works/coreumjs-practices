import { useState } from "react";

const QueryNFTCollection = () => {
  const [receiptNFT, setReceiptNFT] = useState({});
  const issueNFTHandler = async () => {
    try {
      const response = await fetch("/api/queryNFTCollection");
      const data = await response.json();
      setReceiptNFT(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const buttonClass =
    "bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full transition duration-100 ease-in-out";

  return (
    <div className="space-y-4">
      <h2>Query NFT Collection</h2>
      <button className={buttonClass} onClick={issueNFTHandler}>
        Go
      </button>
      <pre> {JSON.stringify(receiptNFT, null, 8)} </pre>
    </div>
  );
};

export default QueryNFTCollection;
