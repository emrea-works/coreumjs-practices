

Button below the Keplr instruction
https://docs.coreum.dev/tools-ecosystem/wallet.html#keplr

Setup CLI Network variables
https://docs.coreum.dev/tutorials/network-variables.html

Workshop Content
https://github.com/wanesurf/Coreum-js-workshop


```json
bankSendBroadcastResponse:  {
  code: 0,
  height: 17415945,
  txIndex: 0,
  rawLog: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"testcore14c90dgy5gj9dczhlpcyww94dcupmxdduy408gu"},{"key":"module","value":"bank"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"testcore14c90dgy5gj9dczhlpcyww94dcupmxdduy408gu"},{"key":"amount","value":"2utestcore"}]},{"type":"coin_received","attributes":[{"key":"receiver","value":"testcore1yepaxacrll5cnshwxf0avpmle9j6m75m0tdgfc"},{"key":"amount","value":"2utestcore"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"testcore1yepaxacrll5cnshwxf0avpmle9j6m75m0tdgfc"},{"key":"sender","value":"testcore14c90dgy5gj9dczhlpcyww94dcupmxdduy408gu"},{"key":"amount","value":"2utestcore"}]},{"type":"message","attributes":[{"key":"sender","value":"testcore14c90dgy5gj9dczhlpcyww94dcupmxdduy408gu"}]}]}]',
  transactionHash: '5B7EC3476FD26166816C721F89850C8E897110FBFEA59282752E724CAE52C11B',
  events: [
    { type: 'coin_spent', attributes: [Array] },
    { type: 'coin_received', attributes: [Array] },
    { type: 'transfer', attributes: [Array] },
    { type: 'message', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
    { type: 'tx', attributes: [Array] },
    { type: 'message', attributes: [Array] },
    { type: 'coin_spent', attributes: [Array] },
    { type: 'coin_received', attributes: [Array] },
    { type: 'transfer', attributes: [Array] },
    { type: 'message', attributes: [Array] }
  ],
  msgResponses: [
    {
      typeUrl: '/cosmos.bank.v1beta1.MsgSendResponse',
      value: Uint8Array(0) []
    }
  ],
  gasUsed: 115000,
  gasWanted: 138000
}
```

