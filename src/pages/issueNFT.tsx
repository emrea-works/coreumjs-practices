import { Header } from "@/comps/LayoutElements";
import IssueNFTCollection from "@/comps/IssueNFTCollection";

export default function Page() {

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10">
        <IssueNFTCollection />
      </div>
    </>
  );
}
