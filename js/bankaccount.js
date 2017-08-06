class BankAccount {
  /* There is no code provided */
  constructor(type, money) {
    this.type = type;
    this.money = money;
    this.transactionArray = [];
  }
  withdraw(e){
    //which should decrease the amount of money by some input
      this.money -= e;
      this.transactionArray.push(`withdrew $${e}`);
      
      if (this.money <= 0){
        this.backupAccount();
      }
  }
  deposit(e){
    //which should increase the amount of money by some input
    this.money += e;
    this.transactionArray.push(`deposited $${e}`);
  }
  showBalance(){
    //which should print the amount of money in the bank to the console.
    console.log("Your balance is " + this.money);
    return this.money;
  }
}
BankAccount.prototype.backupAccount = function () {
  let user = prompt(`you are out of money and how much woul you like to add from your backupAccount`);
  let userNumb = parseInt(user) 
        backupBank.withdraw(userNumb);
        bank.deposit(userNumb);
}
const bank = new BankAccount("checking",2000);
BankAccount.prototype.transactionHistory = function () {
 return transactionArray;
}

const backupBank = new BankAccount("saving", 10000);

bank.withdraw(2500);
bank.deposit(100);
bank.showBalance();
