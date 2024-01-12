import { useState } from "react";
import { buttonClass } from "@/styles/classNames";
import { Header } from '@/comps/LayoutElements'

const IssueNFTCollection = () => {
  const [receipt, setReceipt] = useState(null);
  const apiHandler = async () => {
    try {
      const response = await fetch("/api/issueNFTCollection");
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
        Go
      </button>
      <pre>{receipt ? JSON.stringify(receipt, null, 4) : "{...}"}</pre>
    </div>
  );
};

export default function Page() {

  return (<>
    <Header />
    <div className="container mx-auto mt-10 px-4">
      <IssueNFTCollection />
    </div>
  </>);
}
