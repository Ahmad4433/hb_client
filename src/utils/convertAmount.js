function convertToWords(amount) {
  if (amount === 0) return "zero";

  const denominations = [
    { value: 1e9, name: "Billion" },
    { value: 1e7, name: "Crore" },
    { value: 1e6, name: "Million" },
    { value: 1e5, name: "Lakh" },
    { value: 1e3, name: "Thousand" },
  ];

  for (let i = 0; i < denominations.length; i++) {
    const { value, name } = denominations[i];
    if (amount >= value) {
      const result = (amount / value).toFixed(1);
      // Remove the trailing .0 for whole numbers
      return `${parseFloat(result)} ${name}`;
    }
  }

  // If no denomination matched, return the amount as is
  return amount.toString();
}

export default convertToWords;
