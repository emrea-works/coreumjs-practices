import { buttonClass } from "@/styles/classNames";
import { useState } from "react";

const IssueNFTcollection = () => {
  const [receipt, setReceipt] = useState(null);
  const apiHandler = async () => {
    try {
      const response = await fetch("/api/issueNFTcollection");
      const data = await response.json();
      setReceipt(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="space-y-4">
      <h2>Issue NFT</h2>
      <button className={buttonClass} onClick={apiHandler}>
        Start
      </button>
      <pre>{receipt ? JSON.stringify(receipt, null, 8) : "{...}"}</pre>
    </div>
  );
};

export default IssueNFTcollection;
