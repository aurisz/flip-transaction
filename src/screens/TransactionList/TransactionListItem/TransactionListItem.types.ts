export interface TransactionListItemProps {
  senderBank: string;
  beneficiaryBank: string;
  beneficiaryName: string;
  amountFormatted: string;
  createdAt: string;
  status: string;
  statusLabel: string;
  onPress: () => void;
}
