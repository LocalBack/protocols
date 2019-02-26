import BN = require("bn.js");

export interface OrderInfo {
  // required fields in contract
  owner?: string;
  tokenS?: string;
  tokenB?: string;
  tokenF?: string;
  amountS: BN;
  amountB: BN;
  amountF?: BN;

  stateID?: number;
  accountID?: number;
  orderID?: number;
  walletID?: number;
  dualAuthAccountID?: number;

  tokenIdS?: number;
  tokenIdB?: number;
  tokenIdF?: number;

  allOrNone?: boolean;
  validSince?: number;
  validUntil?: number;
  walletSplitPercentage?: number;
  waiveFeePercentage?: number;

  balanceS?: BN;
  balanceB?: BN;
  balanceF?: BN;

  [key: string]: any;
}

export interface RingInfo {
  orderA: OrderInfo;
  orderB: OrderInfo;

  minerAccountID?: number;
  tokenID?: number;
  fee?: BN;
}

export interface RingBlock {
  rings: RingInfo[];

  timestamp?: number;
  stateID?: number;
  operatorAccountID?: number;
}

export interface Deposit {
  depositBlockIdx: number;
  accountID: number;
  secretKey: string;
  publicKeyX: string;
  publicKeyY: string;
  walletID: number;
  tokenID: number;
  amount: BN;
}

export interface WithdrawalRequest {
  accountID: number;
  tokenID: number;
  amount: BN;
  feeTokenID: number;
  fee: BN;

  withdrawBlockIdx?: number;
}

export interface Withdrawal {
  stateID: number;
  blockIdx: number;
  withdrawalIdx: number;
}

export interface WithdrawBlock {
  withdrawals: WithdrawalRequest[];

  operatorAccountID?: number;
}

export interface Cancel {
  accountID: number;
  orderTokenID: number;
  orderID: number;
  feeTokenID: number;
  fee: BN;
}

export interface CancelBlock {
  cancels: Cancel[];

  operatorAccountID?: number;
}

export interface Block {
  blockIdx: number;
  filename: string;
}

export interface Wallet {
  walletID: number;
  walletAccountID: number;
}