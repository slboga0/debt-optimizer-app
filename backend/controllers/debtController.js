
export const getDebts = (req, res) => {
  res.json([
    { id: 1, creditor: 'Bank A', balance: 5000 },
    { id: 2, creditor: 'Bank B', balance: 3000 }
  ]);
};
