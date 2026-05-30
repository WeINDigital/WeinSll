export type User = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
};

export type AuthState = {
  user?: User | null;
  token?: string | null;
  loading: boolean;
  error?: string | null;
};

export type InvoiceItem = {
  id?: string;
  description: string;
  quantity: number;
  price: number;
  total?: number;
};

export type Invoice = {
  id: string;
  number?: string;
  amount: number;
  date?: string;
  status?: 'draft' | 'sent' | 'paid' | 'overdue';
  customerId?: string;
  items?: InvoiceItem[];
};

export type Discount = {
  id?: string;
  code?: string;
  description?: string;
  amount?: number;
  percent?: number;
  active?: boolean;
};
