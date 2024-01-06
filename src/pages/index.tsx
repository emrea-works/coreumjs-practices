import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import IssuerNFTCollection from "./comps/IssuerNFTCollection";
import QueryNFTCollection from "./comps/QueryNFTCollection";

export default function Home() {
  const mainClass = `flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`;

  return (
    <main className={mainClass}>
      <IssuerNFTCollection />
      <QueryNFTCollection />
    </main>
  );
}
