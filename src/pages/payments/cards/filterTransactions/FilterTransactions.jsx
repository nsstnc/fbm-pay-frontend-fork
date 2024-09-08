import transactions from "./transactions.js";

const FilterTransactions = (value) => {
  // if (!value) {
  //   return transactions;
  // }

  // return transactions.filter((transaction) => {
  //   return (
  //     transaction.accountName.includes(value) ||
  //     transaction.date.includes(value)
  //   );
  // });
  return transactions;
};

export default FilterTransactions;
