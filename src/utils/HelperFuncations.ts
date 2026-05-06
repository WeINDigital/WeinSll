import { TextStyle } from "react-native";

export const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const getClientValueStyle = (text: string): TextStyle => {
    console.log("text", text);
    
  switch (text) {
    case 'Discount':
      return { color: 'red' };

    case 'Received':
      return { color: 'green' };

    case 'Total Amount':
      return { fontWeight: 'bold' };

    default:
      return {};
  }
};

export const getClientFormattedValue = (
  text: string,
  value: string
): string => {
  if (text === 'Collection Date') {
    return formatDate(value);
  }
  return value;
};