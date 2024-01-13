import { useState, useEffect } from "react";
import { BalanceData } from "@/types/data";
import ButtonGo from '@/comps/ButtonGo';

const QueryBalance = (
  { button }: { button: boolean }
) => {
  const [receipt, setReceipt] = useState<BalanceData | undefined>(undefined);

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

  return (<>
    <span>
      {receipt && receipt.balance && receipt.balance.length > 0 ? (
        <>
          {receipt.balance[0].amount / 1_000_000}{" "}
          <span className="text-sm opacity-60">{receipt.balance[0].denom}</span>
        </>
      ) : (
        <>...</>
      )}
    </span>
    {button && <ButtonGo text="Refresh" onClick={apiHandler} moreClasses="block mt-4" />}
  </>)
};

export default QueryBalance;
