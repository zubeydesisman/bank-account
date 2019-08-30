
function BankAccount(name, initDepo) {
  this.Name = name,
  this.initDepo = initDepo,
  //this.withAmount = withAmount,
  //this.depoAmount = depoAmount,
  this.currBalance = initDepo
}


//BankAccount.prototype.register = function() {
//  this.currBalance = this.initDepo;


BankAccount.prototype.calcurrBalance = function(inputtedepoAmount,inputtedwithAmount) {
  this.currBalance = this.currBalance + inputtedepoAmount - inputtedwithAmount;
}


var bankAccount;//ikiayri functioni goren scopeta.
$(document).ready(function() {
$("form#register-section").submit(function(event) {
    event.preventDefault();
    var inputtedinitDepo = parseInt($("input#initDepo").val());
    console.log(inputtedinitDepo);
    var inputtedName = $("input#name").val();
    console.log(inputtedName);




    var bankAccount = new BankAccount(inputtedName, inputtedinitDepo);
  //bankAccount.register();
  console.log("show me", bankAccount.currBalance);
   });
   $("form#fund-section").submit(function(event) {
       event.preventDefault();
        // var inputtedinitDepo = parseInt($("input#initDepo").val());
         //var inputtedName = $("input#name").val();
         var inputtedwithAmount = parseInt($("input#withAmount").val());
         var inputtedepoAmount = parseInt($("input#depoAmount").val());
       //var bankAccount = new BankAccount(inputtedName, inputtedinitDepo, inputtedwithAmount, inputtedepoAmount);

        bankAccount.calcurrBalance(inputtedepoAmount, inputtedwithAmount);
        console.log("show me", bankAccount.currBalance);




});
});

//var inputtedepoAmount = parseInt($("input#depoAmount").val());
//   console.log(inputtedwithAmount);
  //console.log(inputteddepoAmount);
  //  bankAccount.calculcurrBalance();
