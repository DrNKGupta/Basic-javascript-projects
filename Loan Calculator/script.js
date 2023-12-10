function calculateLoan(){

    const loanAmount = parseFloat(document.getElementById("LoanAmount").value);
    const interestRate = parseFloat(document.getElementById("InterestRate").value);
    const term = parseFloat(document.getElementById("LoanTerm").value);


    if(isNaN(loanAmount)|| isNaN(interestRate) || isNaN(term)){
        showError('Please enter vaild input');
        return;
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayment = term;
    const monthlyEMI = (loanAmount *monthlyInterest)/(1-Math.pow(1+monthlyInterest,-totalPayment));

    const totalInterest = (monthlyEMI*totalPayment) - loanAmount;

    displayResult(monthlyEMI, totalInterest);

}
function displayResult(monthlyEMI,totalInterest){

const resultDiv = document.getElementById("result");
resultDiv.innerHTML = `
    <p><strong>Monthly Emi : ${monthlyEMI.toFixed(3)}</strong></p>
    <p><strong>Total Interest : ${totalInterest.toFixed(3)}</strong></p>

`
}
function showError(message){

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ` <p class="error">${message} </p>`;
}

document.getElementById("CalculateBtn").addEventListener("click",calculateLoan);