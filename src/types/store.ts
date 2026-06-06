import type { AuthState, Invoice, Discount } from '@src/types/domain';

export type InvoicesState = Record<string, Invoice>;
export type DiscountsState = Record<string, Discount>;

export type RootState = {
  auth: AuthState;
  invoices: InvoicesState;
  discounts: DiscountsState;
};
