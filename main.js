
const substractButton = document.querySelector('#substract-expense');

substractButton.addEventListener('click', function(event) {
    event.preventDefault();

    let budgetString = document.querySelector('#budget-number').innerHTML;
    const budget = parseInt(budgetString);
    let userExpenseString = document.querySelector('#expense').value;
    const userExpense = parseInt(userExpenseString);
    const errorMessage = document.querySelector('#error-message');
    const substractedValue = budget - userExpense;

    budgetString = substractedValue.toString();
    document.querySelector('#budget-number').innerHTML = budgetString;

    if (userExpenseString === "" ) {
        errorMessage.innerHTML = 'Veuillez entrer un nombre';
    }
    else {
        errorMessage.innerHTML = '';
    }

    if (substractedValue < 0) {
        document.querySelector('#budget-number').style.color = 'red';
    }

    document.querySelector('#expense').value = "";
});