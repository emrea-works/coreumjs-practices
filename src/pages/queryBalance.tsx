import { useState, useEffect } from "react";
import ButtonGo from '@/comps/ButtonGo'
import { Header } from '@/comps/LayoutElements'

interface MyData {
  balance: { amount: number; denom: number }[];
}

const QueryBalance = () => {
  const [receipt, setReceipt] = useState<MyData | undefined>(undefined)

  const apiHandler = async () => {
    try {
      const response = await fetch("/api/queryBalance");
      const data = await response.json();
      setReceipt(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Assume you want to fetch data when the component mounts
  useEffect(() => {
    apiHandler();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-4xl">Balance</h1>
      {/*<ButtonGo onClick={apiHandler} />*/}
      <div>{receipt && receipt.balance && receipt.balance.length > 0 ? (
        <p className="text-lg">{receipt.balance[0].amount / 1_000_000}
        {" "}<span className="text-sm opacity-60">{receipt.balance[0].denom}</span></p>
      ) : (
        <p>...</p>
      )}</div>
      {/*<pre>{receipt ? JSON.stringify(receipt, null, 2) : "{...}"}</pre>*/}
    </div>
  );
};


export default function Page() {

  return (<>
    <Header />
    <div className="container mx-auto mt-10 px-4">
      <QueryBalance />
    </div>
  </>);
}
