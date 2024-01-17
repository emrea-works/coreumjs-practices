export interface BalanceData {
  balance: { amount: number; denom: number }[];
  bank: { transactionHash: string; }
}
