export type ResponseItem = {
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
};

export type TransactionItem = {
  id: string;
  status: string;
  uniqueCode: number;
  remark: string;
  accountNumber: string;
  beneficiaryName: string;
  beneficiaryBank: string;
  senderBank: string;
  amount: string;
  createdAt: string;
  statusText: string;
};

export type ResponseData = {
  [key: string]: ResponseItem;
};
