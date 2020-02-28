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

// Formula according to instructions: E = U[b(1 + b)^p]/[(1 + b)^p - 1]


  var monthlyPayment = (downPayment*(monthlyInterestRate*Math.pow( (1 + monthlyInterestRate), numberOfMonthlyPayments))) / (Math.pow((1 + monthlyInterestRate),numberOfMonthlyPayments)- 1);
  var monthlyPaymentRounded = Math.round(monthlyPayment * 100) / 100;
  console.log('monthlyPaymentRounded: ' + monthlyPaymentRounded );
  document.querySelector('#mopayment').value = monthlyPaymentRounded;
}


document.querySelector('#sell-price').onkeyup = function(){ calculateMonthlyPayment() };
document.querySelector('#dwn-payment').onkeyup = function(){ calculateMonthlyPayment() };
document.querySelector('#rate').onkeyup = function(){ calculateMonthlyPayment() };
document.querySelector('#yrs').onkeyup = function(){ calculateMonthlyPayment() };
