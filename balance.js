const mockBalances = {
  jake: 120,
  maria: 85,
  ruben: 45,
};

function checkBalance() {
  const name = document.getElementById("userQuery").value.toLowerCase();
  const result = document.getElementById("balanceResult");

  if (!name) return (result.textContent = "Enter your nickname.");

  if (mockBalances[name] !== undefined) {
    result.textContent = `${name} has ${mockBalances[name]} TUC tokens.`;
  } else {
    result.textContent = "No tokens found for this nickname.";
  }
}
