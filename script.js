function calculateMortgage() {
  var loanAmount = document.getElementById("loan-amount").value;
  var interestRate = document.getElementById("interest-rate").value / 100 / 12;
  var loanTerm = document.getElementById("loan-term").value * 12;
  
  var mortgage = loanAmount * (interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
  var output = "Monthly Mortgage Payment: $" + mortgage.toFixed(2);
  
  document.getElementById("output").innerHTML = output;
}