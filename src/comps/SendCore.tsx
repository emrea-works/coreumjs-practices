import { useState, useEffect } from "react";
import { inputClass } from '@/styles/classNames';
import ButtonGo from '@/comps/ButtonGo';
import type { BalanceData } from '@/types/data'


const SendCore = () => {
  const [receipt, setReceipt] = useState<BalanceData | undefined>(undefined);
  const [amount, setAmount] = useState<string | undefined>(undefined);

  const handleSendCore = async () => {
    try {
      const response = await fetch("/api/sendCore");
      const data = await response.json();
      setReceipt(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

	function handleAmount(event: React.ChangeEvent<HTMLInputElement>){
		setAmount(event.target.value)
	}

  useEffect(() => {
    console.log("receipt of sent core");

  }, [receipt])

  return (<div className="my-2">
		<h1 className="text-2xl">Send Core</h1>
		<label htmlFor="">
      <p>To Address:</p>
			<input type="text" className={`${inputClass} text-green-400`}
				onChange={handleAmount}
			/>
		</label>
		<ButtonGo text="Send" onClick={handleSendCore} moreClasses="block mt-4" />
    <h3 className="mt-4 text-xl">Sent Receipt</h3>
    {/* Debug Area */}
		<pre className="my-2">
      {receipt ? JSON.stringify(receipt, null, 2) : "{ ... }"}
    </pre>
  </div>);
};

export default SendCore;
