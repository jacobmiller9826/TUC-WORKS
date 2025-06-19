const balances = {
  jake: 120,
  maria: 85,
};

document.getElementById("mintForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nickname").value.toLowerCase();
  const amount = parseInt(document.getElementById("amount").value);
  const result = document.getElementById("mintResult");

  if (!balances[name]) balances[name] = 0;
  balances[name] += amount;

  result.textContent = `${amount} TUC tokens sent to ${name}. New balance: ${balances[name]}`;
});
