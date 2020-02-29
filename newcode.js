function calculateMonthlyPayment(){
//E = monthlyPayment (Fixed monthly payment)
//b = interestRate (Interest on a monthly basis)
//U = downPayment (Total loan)
//p = years (Number of payments)

  var downPayment = document.querySelector('#dwn-payment').value; console.log('downPayment:' + downPayment );
  var interestRate = document.querySelector('#rate').value; console.log('interestRate: ' + interestRate );
  var years = document.querySelector('#yrs').value; console.log('years: ' + years );
 
  var monthlyInterestRate = ( interestRate / 12 ) / 100;
  var numberOfMonthlyPayments = years * 12;
  
  //creating my own pow

//}
//class myownpow }
//  public static int pow(int baseNum, int powNum) {
//  int result = 1;
//   for(int i = 0; i < powNum; i++) {
//      result = result * baseNum;
//     }
// return result
//}

// Formula with my own created pow function:
// var monthlyPayment = (downPayment*(monthlyInterestRate*pow( (1 + monthlyInterestRate), numberOfMonthlyPayments))) / (pow((1 + monthlyInterestRate),numberOfMonthlyPayments)- 1);
  

// Formula according to instructions: E = U[b(1 + b)^p]/[(1 + b)^p - 1]

 
// original formula with Math.pow: 
var monthlyPayment = (downPayment*(monthlyInterestRate*Math.pow( (1 + monthlyInterestRate), numberOfMonthlyPayments))) / (Math.pow((1 + monthlyInterestRate),numberOfMonthlyPayments)- 1);
  
var monthlyPaymentRounded = Math.round(monthlyPayment * 100) / 100;
  console.log('monthlyPaymentRounded: ' + monthlyPaymentRounded );
  document.querySelector('#mopayment').value = monthlyPaymentRounded;
}


document.querySelector('#sell-price').onkeyup = function(){ calculateMonthlyPayment() };
document.querySelector('#dwn-payment').onkeyup = function(){ calculateMonthlyPayment() };
document.querySelector('#rate').onkeyup = function(){ calculateMonthlyPayment() };
document.querySelector('#yrs').onkeyup = function(){ calculateMonthlyPayment() };

