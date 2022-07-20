import type {
  ResponseData,
  ResponseItem,
  TransactionItem,
} from '../types/transaction';

const formatDate = (date: string): string => {
  const [year, month, day] = date.split(/\\-|\s/);
  const formattedDate: Date = new Date(+year, +month - 1, +day);
  const convertedDate: string = formattedDate.toLocaleString('id-ID', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });

  return convertedDate;
};

const formatCurrency = (amount: number): string => {
  return `Rp${amount.toLocaleString('id-ID')}`;
};

const formatStatus = (status: string): string => {
  return status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan';
};

export const formatTransactionItem = (item: ResponseItem): TransactionItem => ({
  id: item.id,
  status: item.status,
  uniqueCode: item.unique_code,
  remark: item.remark,
  accountNumber: item.account_number,
  beneficiaryName: item.beneficiary_name,
  beneficiaryBank: item.beneficiary_bank.toUpperCase(),
  senderBank: item.sender_bank.toUpperCase(),
  amount: formatCurrency(item.amount),
  createdAt: formatDate(item.created_at),
  statusText: formatStatus(item.status),
});

export const formatTransactionList = (data: ResponseData) =>
  Object.values(data).map(formatTransactionItem);
