import { Header } from "@/comps/LayoutElements";
import QueryNFTCollection from "@/comps/QueryNFTCollection";

export default function Page() {

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10">
        <QueryNFTCollection />
      </div>
    </>
  );
}
