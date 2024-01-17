import { Header } from '@/comps/LayoutElements'
import QueryBalance from '@/comps/QueryBalance'
import SendCore from '@/comps/SendCore'

export default function Page() {

  // to address: testcore1yepaxacrll5cnshwxf0avpmle9j6m75m0tdgfc

  // const receipt = <QueryBalance onlyReceipt button={false} />

  return (<>
    <Header />
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-4xl mb-3">Wallet</h1>
      <p className="text-xl">Balance</p>
      <QueryBalance button />
      <hr className="my-5 border-green-600" />
      <SendCore />
      {/*<pre>{typeof JSON.stringify(receipt)}</pre>*/}
    </div>
  </>);
}
