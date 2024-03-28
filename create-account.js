// params(pin, amount)
// returns an object with 4 methods
// check balance(pin) returns balance if pin is correct, else "Invalid Pin"
// deposit(pin, amount) add to deposit, else "Invalid Pin"
// withdraw(pin, amount) cannot withdraw excess, subtract amount, else "Invalid Pin"
// changePin(oldPin, newPin) update pin, else "Invalid Pin"

function createAccount(pin, amount = 0) {
    return{
        checkBalance(pinNum){
            if(pin !== pinNum) return "Invalid PIN.";
            return `$${amount}`;
        },
        deposit(pinNum, addAmount){
            if(pin !== pinNum) return "Invalid PIN.";
            amount = amount + addAmount;
            return `Succesfully deposited $${addAmount}. Current balance: $${amount}.`
        },
        withdraw(pinNum, takeAmount){
            if(pin !== pinNum) return "Invalid PIN.";
            if(takeAmount > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled."
            amount = amount - takeAmount;
            return `Succesfully withdrew $${takeAmount}. Current balance: $${amount}.`
        },
        changePin(checkPin, pinNum){
            if(pin !== checkPin) return "Invalid PIN.";
            pin = pinNum;
            return "PIN successfully changed!"
        }
    }

}

module.exports = { createAccount };
