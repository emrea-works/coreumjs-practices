// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sha256 } from 'js-sha256'
import type { NextApiRequest, NextApiResponse } from 'next'
import CoreumJS from '../../config/coreum-js'
import { NFT } from 'coreum-js'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // Init the client and target the testnet network:
    const coreumClient = await CoreumJS("testnet");

    const issuer  = coreumClient.address;
    // const lnftURI = `${process.env.URIBASE}/${lnftCount}.json`
    const lnftURI = `${process.env.URIBASE}/1.json`

    const newNFT = NFT.Mint({
        sender: issuer,
        classId: "lnfts-testcore14c90dgy5gj9dczhlpcyww94dcupmxdduy408gu",
        id: "lnfts-1",
        uri: lnftURI,
        uriHash: sha256.create().update(lnftURI).hex(),
    })

    const result = await coreumClient.sendTx([newNFT]);

    res.status(200).json({ name: result })
}
