import { Header } from "@/comps/LayoutElements";
import Hello from "@/comps/Hello";

export default function Page() {

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10">
        <Hello />
      </div>
    </>
  );
}
