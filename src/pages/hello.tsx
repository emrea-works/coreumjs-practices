import { useState } from "react";
import ButtonGo from '@/comps/ButtonGo'
import { Header } from '@/comps/LayoutElements'

const Hello = () => {
  const [receipt, setReceipt] = useState(null);
  const apiHandler = async () => {
    try {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setReceipt(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="space-y-4">
      <h2>Hello API Example</h2>
      <ButtonGo onClick={apiHandler} />
      <pre>{receipt ? JSON.stringify(receipt, null, 2) : "{...}"}</pre>
    </div>
  );
};


export default function Page() {

  return (<>
    <Header />
    <div className="container mx-auto mt-10 sm:px-4">
      <Hello />
    </div>
  </>);
}
