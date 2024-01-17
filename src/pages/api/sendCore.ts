// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import CoreumJS from "../../config/coreum-js";
import { Bank } from "coreum-js";

// interface QueryParameters {
//   denom: string;
//   amount: string;
//   to: string;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const { denom, amount, to } = req.query;
  const { denom, amount, to } = req.query as {
    denom: string;
    amount: string;
    to: string;
  };

  console.log("--> api called: %s, %s, %s", denom, amount, to);

  // Init the client and target the testnet network:
  const coreumClient = await CoreumJS("testnet");

  const issuer = coreumClient.address;

  // Let's initiate the bank send transaction:
  const bankSendMsg = Bank.Send({
    fromAddress: issuer,
    toAddress: to,
    amount: [
      {
        denom: denom,
        // amount is defined in subunits, taking the precision into
        // an account we are sending 1 CORE
        amount: amount,
      },
    ],
  });
  console.log("bankSendMsg: ", bankSendMsg);

  const bankSendBroadcastResponse = await coreumClient.sendTx([bankSendMsg]);
  console.log("bankSendBroadcastResponse: ", bankSendBroadcastResponse);

  res.status(200).json({ bank: bankSendBroadcastResponse });
}
