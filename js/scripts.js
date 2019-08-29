
function BankAccount(name, initDepo, depoAmount, withAmount,currBalance) {
  this.Name = name,
  this.initDepo = initDepo
  this.depoAmount  = depoAmount,
  this.withAmount = withAmount,
  this.currBalance = currBalance
}


BankAccount.prototype.register = function(name) {
  this.name = $("input#name").val();
  console.log(this.name);
}


  BankAccount.prototype.calculcurrBalance = function(){
  this.currBalance = this.initDepo + this.depoAmount - this.withAmount;
   }



$(document).ready(function() {

  $("form#name-section").submit(function(event) {
    event.preventDefault();
    var inputtedinitDepo = $("input#initDepo").val();
    var inputtedName = $("input#name").val();
    console.log(inputtedName);
    var inputteddepoAmount = $("input#depoAmount").val();
    var inputtedwithAmount = $("input#withAmount").val();

    var bankAccount = new BankAccount(inputtedName, inputtedinitDepo, inputteddepoAmount, inputtedwithAmount, currBalance);
     bankAccount.calculcurrBalance();
console.log(bankAccount.currBalance);
  });
});
//var currentBalance =
