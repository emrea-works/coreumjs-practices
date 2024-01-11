// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import CoreumJS from '../../config/coreum-js'
import { NFT } from 'coreum-js'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // Init the client and target the testnet network:
    const coreumClient = await CoreumJS("testnet");

    const issuer = coreumClient.address;

    const newNFTCollection = NFT.IssueClass({
        issuer: issuer,
        //Unique for each user collection
        symbol: "LNFTS",
        name: "Learning NFTs",
        description: "a new collection of NFTs",
        uri: process.env.URIBASE,
        uriHash: "somehash",
        royaltyRate: "0",
        // burning = 0, freezing = 1,  whitelisting = 2,disable_sending = 3
        features: [2]
    });

    console.log(newNFTCollection);

    const newCollection = await coreumClient.sendTx([newNFTCollection]);

    res.status(200).json({ name: newCollection })
}
