export default {
  sortOptions: [
    {
      label: 'URUTKAN',
      value: 'id|desc',
    },
    {
      label: 'Nama A-Z',
      value: 'beneficiaryName|asc',
    },
    {
      label: 'Nama Z-A',
      value: 'beneficiaryName|desc',
    },
    {
      label: 'Tanggal Terbaru',
      value: 'createdAt|desc',
    },
    {
      label: 'Tanggal Terlama',
      value: 'createdAt|asc',
    },
  ],
  transactionStatus: {
    SUCCESS: 'SUCCESS',
    PENDING: 'PENDING',
  },
};
