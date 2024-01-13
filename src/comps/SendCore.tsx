import { useState, /* useEffect */ } from "react";
import { inputClass } from '@/styles/classNames';
import ButtonGo from '@/comps/ButtonGo';
import type { BalanceData } from '@/types/data'


const SendCore = () => {
  const [receipt, setReceipt] = useState<BalanceData | undefined>(undefined);
  const [amount, setAmount] = useState<string | undefined>(undefined);

  const apiHandler = async () => {
    try {
      const response = await fetch("/api/sendCore");
      const data = await response.json();
      setReceipt(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

	function handleAmount(e: MouseEventHandler){
		setAmount(e.target.value)
	}

  // Assume you want to fetch data when the component mounts
  // useEffect(() => {
  //   apiHandler();
  // }, []);

  return (<div className="my-2">
		<h1 className="text-2xl">Send Core</h1>
		<label htmlFor="">
			<input type="text" className={`${inputClass} text-green-400`}
				onChange={handleAmount}
			/>
		</label>
		<ButtonGo text="Send" onClick={apiHandler} moreClasses="block mt-4" />
		<pre>{receipt ? JSON.stringify(receipt, null, 2) : "{ ... }"}</pre>
  </div>);
};

export default SendCore;
