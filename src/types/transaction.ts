import constants from '@constants/index';

const { transactionStatus } = constants;

export interface ResponseItem {
  id: string;
  amount: number;
  unique_code: number;
  status: string;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
}

export interface TransactionItem {
  [key: string]: any;
  id: string;
  status: string;
  uniqueCode: number;
  remark: string;
  accountNumber: string;
  beneficiaryName: string;
  beneficiaryBank: string;
  senderBank: string;
  amount: number;
  amountFormatted: string;
  createdAt: string;
  statusLabel: string;
}

export interface ResponseData {
  [key: string]: ResponseItem;
}

export type SortOption =
  | 'id|desc'
  | 'beneficiaryName|asc'
  | 'beneficiaryName|desc'
  | 'createdAt|asc'
  | 'createdAt|desc';

export type SortValue = 'beneficiaryName' | 'createdAt' | 'id';
export type SortOrder = 'asc' | 'desc';

export type TransactionStatus =
  | typeof transactionStatus.SUCCESS
  | typeof transactionStatus.PENDING;
