// script.js
console.log("Welcome to my second Git project!");

function displayCalculatedTip(tipCalculatorForm, messageElement) {
    let billAmount = tipCalculatorForm.elements["billAmount"].value;
    billAmount = Number(billAmount);
    const selectedTipPercentage = tipCalculatorForm.elements["tipPercentage"].value;
    if (selectedTipPercentage <= 0) {
        alert("Please select a valid tip percentage!");
        return;
    }

    const tipAmount = calculateTipAmount(billAmount, selectedTipPercentage);

    const totalBill = billAmount + tipAmount;

    const message = "The calculated tip amount is $" +  tipAmount + ", and the total bill is $" + totalBill + ".";
    messageElement.innerHTML = message;
}

function calculateTipAmount(billAmount, tipPercentage) {
    const tipAmount = (billAmount * tipPercentage) / 100;

    return tipAmount;
}

function resetForm(tipCalculatorForm, messageElement) {
    tipCalculatorForm.reset();
    messageElement.innerHTML = '';

    return;
}