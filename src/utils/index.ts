import type {
  ResponseData,
  ResponseItem,
  TransactionItem,
  SortValue,
  SortOrder,
} from '@customTypes/index';

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
 * capitalize string
 *
 * @param {string} string
 * @returns {string} capitalized string
 */
const capitalize = ([first, ...rest]: string) =>
  first.toUpperCase() + rest.join('');

/**
 * format bank name based on length
 *
 * @param {string} name
 * @returns {string} formatted bank name
 */
const formatBankName = (name: string): string =>
  name.length > 4 ? capitalize(name) : name.toUpperCase();

/**
 * format transaction list item
 *
 * @param {ResponseItem} item - response data item
 * @returns {TransactionItem} formatted transaction list item
 */
export const formatTransactionItem = (item: ResponseItem): TransactionItem => ({
  id: item.id,
  status: item.status,
  uniqueCode: item.unique_code,
  remark: item.remark,
  accountNumber: item.account_number,
  beneficiaryName: item.beneficiary_name.toUpperCase(),
  beneficiaryBank: formatBankName(item.beneficiary_bank),
  senderBank: formatBankName(item.sender_bank),
  amount: item.amount,
  amountFormatted: formatCurrency(item.amount),
  createdAt: formatDate(item.created_at),
  statusLabel: getStatusLabel(item.status),
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
 * @param {string} keyword - filter keyword
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

/**
 * sort array of objects by field and order
 *
 * @param {Array} array - array of objects to sort
 * @param {SortValue} field - field to sort by
 * @param {SortOrder} order - sort order
 * @returns {Array} sorted array
 */
export const sortArrayByField = <T extends { [k: string]: string }>(
  array: T[],
  field: SortValue,
  order: SortOrder,
): T[] => {
  const isAscending = order === 'asc';

  return array.sort((a, b) => {
    return (
      (+(a[field] > b[field]) - +(b[field] > a[field])) * (isAscending ? 1 : -1)
    );
  });
};
