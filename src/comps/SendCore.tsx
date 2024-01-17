import { useState, useEffect } from "react";
import { inputClass } from '@/styles/classNames';
import ButtonGo from '@/comps/ButtonGo';
import type { BalanceData } from '@/types/data'


const SendCore = () => {
  const [receipt, setReceipt] = useState<BalanceData | undefined>(undefined);
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const [denom, setDenom] = useState<string | undefined>(undefined);
  const [to, setTo] = useState<string | undefined>(undefined);
  const [isLoading, setLoading] = useState(false)

  const handleSendCore = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/sendCore?denom=${denom}&amount=${amount}&to=${to}`);
      const data = await response.json();
      setReceipt(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

	function handleAmount(event: React.ChangeEvent<HTMLInputElement>){
		setAmount(event.target.value)
    setDenom("utestcore")
	}

	function handleTo(event: React.ChangeEvent<HTMLInputElement>){
		setTo(event.target.value)
	}

  useEffect(() => {
    console.log("receipt of sent core arrived.");
    setLoading(false)
    // Clear the local values after receipt arrives
    setAmount("")
    setTo("")
  }, [receipt])

  return (<div className="my-2">
		<h1 className="text-2xl">Send Core</h1>

		<label htmlFor="">
      <p>To Address:</p>
			<input type="text" name="inputTo" className={`${inputClass} text-green-400`}
				onChange={handleTo}
			/>
		</label>
		<label htmlFor="">
      <p>Amount:</p>
			<input type="text" name="inputAmount" className={`${inputClass} text-green-400`}
				onChange={handleAmount}
			/>
		</label>

		<ButtonGo text={isLoading ? "Senging..." : "Send"}
      onClick={handleSendCore}
      moreClasses="block mt-4"
      isDisabled={isLoading}
    />

    <h3 className="mt-4 text-xl">Sent Receipt</h3>
    {/* Debug Area */}
		<pre className="my-2">
      {receipt ? JSON.stringify(receipt, null, 2) : "{ ... }"}
    </pre>
  </div>);
};

export default SendCore;
