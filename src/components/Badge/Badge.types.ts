import type { TransactionStatus } from '@customTypes/index';

export type BadgeVariant = TransactionStatus;

export interface Props {
  label: string;
  variant: BadgeVariant;
}
