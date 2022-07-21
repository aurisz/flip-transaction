import type {
  ResponseData,
  ResponseItem,
  TransactionItem,
} from '../types/transaction';

/**
 * format date to DD MMMM YYYY
 *
 * @param {string} date - date string
 * @returns {string} formatted date
 */
const formatDate = (date: string): string => {
  const [year, month, day] = date.split(/\-|\s/);
  // month start at 0
  const formattedDate: Date = new Date(+year, +month - 1, +day);
  const convertedDate: string = formattedDate.toLocaleString('id-ID', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });

  return convertedDate;
};

/**
 * format currency to IDR
 *
 * @param {number} amount - amount number
 * @returns {string} formatted rupiah amount
 */
const formatCurrency = (amount: number): string =>
  `Rp${amount.toLocaleString('id-ID')}`;

/**
 * get label based on status
 *
 * @param {string} status
 * @returns status label
 */
const getStatusLabel = (status: string): string =>
  status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan';

/**
 * format transaction list item
 *
 * @param {ResponseItem} item
 * @returns {TransactionItem} formatted transaction list item
 */
export const formatTransactionItem = (item: ResponseItem): TransactionItem => ({
  id: item.id,
  status: item.status,
  uniqueCode: item.unique_code,
  remark: item.remark,
  accountNumber: item.account_number,
  beneficiaryName: item.beneficiary_name,
  beneficiaryBank: item.beneficiary_bank.toUpperCase(),
  senderBank: item.sender_bank.toUpperCase(),
  amount: item.amount,
  amountFormatted: formatCurrency(item.amount),
  createdAt: formatDate(item.created_at),
  statusText: getStatusLabel(item.status),
});

/**
 * format transaction list object into array of formatted transaction item
 *
 * @param {ResponseData} data - response data
 * @returns {TransactionItem[]} array of formatted transaction item
 */
export const formatTransactionList = (data: ResponseData): TransactionItem[] =>
  Object.values(data).map(formatTransactionItem);

const filterKeys = [
  'senderBank',
  'beneficiaryBank',
  'beneficiaryName',
  'amount',
];

/**
 * filter transaction list array on specific keys and keyword
 *
 * @param {TransactionItem[]} transactionList
 * @param {string} keyword
 * @returns {TransactionItem[]} filtered transaction item array
 */
export const filterTransactionList = (
  transactionList: TransactionItem[],
  keyword: string,
): TransactionItem[] => {
  return transactionList.filter(item =>
    filterKeys.some(filterKey => {
      const filteredItem = item[filterKey].toString().toLowerCase();

      return filteredItem.includes(keyword.toLowerCase());
    }),
  );
};
