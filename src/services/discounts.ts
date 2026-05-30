export type DiscountRequest = {
  clientId?: string;
  paymentType?: string;
  items?: any[];
  totalAmount?: number | string;
  receivedAmount?: number | string;
  collectionDate?: string | Date;
  reason?: string;
};

export type DiscountResponse = {
  id: string;
  status: 'Approved' | 'Rejected' | 'In Progress';
  createdAt: string;
} & DiscountRequest;

// Mock API: replace with real network call later
export const requestDiscount = async (
  payload: DiscountRequest,
): Promise<DiscountResponse> => {
  // simulate network delay
  await new Promise<void>(resolve => setTimeout(() => resolve(), 600));

  // simple status logic for demo: Approved if totalAmount > 1000, Rejected if reason empty, else In Progress
  const numericTotal = Number(payload.totalAmount || 0);
  let status: DiscountResponse['status'] = 'In Progress';
  if (!payload.reason || payload.reason.trim() === '') status = 'Rejected';
  else if (numericTotal > 1000) status = 'Approved';

  return {
    id: Date.now().toString(),
    status,
    createdAt: new Date().toISOString(),
    ...payload,
  } as DiscountResponse;
};

export default {
  requestDiscount,
};
