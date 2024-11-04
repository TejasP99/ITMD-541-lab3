document.addEventListener("DOMContentLoaded", function () {
    const tip = document.getElementById("tip");
    const billInput = document.getElementById("bill");
    const percentDisplay = document.getElementById("percent");
    const tipSlider = document.getElementById("range");
    const tipAmountDisplay = document.getElementById("amt");
    const totalBillDisplay = document.getElementById("total");
    const currency = document.getElementById("currency");

    const exchangeRates = {
        usd: 1,
        inr: 84.13,
        jpy: 152.95,
        rub: 97.86
    };

    tip.addEventListener("input", calculateTip);

    function calculateTip() {
        const billAmounnt = parseFloat(billInput.value);
        const tipPercentage = parseFloat(tipSlider.value);

        if (isNaN(billAmounnt) || billAmounnt < 0) {
            tipAmountDisplay.value = "";
            totalBillDisplay.value = "";
            alert("Please enter a valid bill amount.");
            return;
        }
        const tipAmount = (billAmounnt * tipPercentage) / 100;
        const totalAmount = billAmounnt + tipAmount;

        const selectedCurrency = currency.value;
        const exchangeRate = exchangeRates[selectedCurrency];
        
        tipAmountDisplay.value = (tipAmount * exchangeRate).toFixed(2) + getCurrencySymbol(selectedCurrency);
        totalBillDisplay.value = (totalAmount * exchangeRate).toFixed(2) + getCurrencySymbol(selectedCurrency);
        percentDisplay.value = tipPercentage + "%";
    }

    function getCurrencySymbol(code) {
        switch (code){
            case "inr": return " ₹";
            case "jpy": return " ¥";
            case "rub": return " ₽";
            default: return " $";
            }

    }
    });
