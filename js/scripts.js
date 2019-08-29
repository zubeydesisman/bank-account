
function BankAccount(name, initDepo, withAmount, depoAmount, currBalance) {
  this.Name = name,
  this.initDepo = initDepo
  this.withAmount = withAmount,
  this.depoAmount = depoAmount,
  this.currBalance = 0
}


BankAccount.prototype.register = function() {
  this.currBalance = this.initDepo;
}

BankAccount.prototype.calcurrBalance = function() {
  this.currBalance = this.currBalance - inputtedwithAmount;
}



$(document).ready(function() {
$("form#register-section").submit(function(event) {
    event.preventDefault();
    var inputtedinitDepo = parseInt($("input#initDepo").val());
    console.log(inputtedinitDepo);
    var inputtedName = $("input#name").val();
    console.log(inputtedName);




    var bankAccount = new BankAccount(inputtedName, inputtedinitDepo, inputtedwithAmount, inputtedepoAmount);
  bankAccount.register();
  console.log("show me", bankAccount.currBalance);
   });
   $("form#fund-section").submit(function(event) {
       event.preventDefault();
         var inputtedinitDepo = parseInt($("input#initDepo").val());
         var inputtedName = $("input#name").val();
         var inputtedwithAmount = parseInt($("input#withAmount").val());
         var inputtedepoAmount = parseInt($("input#depoAmount").val());
       var bankAccount = new BankAccount(inputtedName, inputtedinitDepo, inputtedwithAmount, inputtedepoAmount);

        bankAccount.calcurrBalance();
        console.log("show me", bankAccount.currBalance);




});
});

var inputtedwithAmount = parseInt($("input#withAmount").val());
var inputtedepoAmount = parseInt($("input#depoAmount").val());
//   console.log(inputtedwithAmount);
  //console.log(inputteddepoAmount);
  //  bankAccount.calculcurrBalance();
