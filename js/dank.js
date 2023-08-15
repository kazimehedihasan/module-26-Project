
// ----------------
document.getElementById('btn-Deposit').addEventListener('click', function(){
    // console.log('mehedi');
    const DepositField = document.getElementById('Deposit-field');
    const newDepositAmountString = DepositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);
    // console.log(typeof newDepositAmount);
    // --
    const DepositTotalElement = document.getElementById('Deposit-total');
    const previousDepositTotalString = DepositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString)
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
  DepositTotalElement.innerText = currentDepositTotal;
  
  // ---
  const balanceTotalElement = document.getElementById('Balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;
  
  
  DepositField.value = '';
  })
  
  
  // --------
  
  
  // btn-Withdraw 
  
  
  document.getElementById('btn-Withdraw').addEventListener('click', function(){
    // console.log('wggwqfdwfqfc')
    const WithdrawField = document.getElementById('Withdraw-field');
    const newWithdrawAmountString = WithdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  
    WithdrawField.value = '';  
  
    if(isNaN(newWithdrawAmount)){
      alert('please provide a valid number');
      return;
    }
    // console.log(newDepositAmount)
  
    const WithdrawTotalElement = document.getElementById('Withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // --
    
  
  
  const balanceTotalElement = document.getElementById('Balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  
  
   if(newWithdrawAmount > previousBalanceTotal){
    alert('Baap er bank e eto taka nai');
    return;
   }
  //  --
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal;
    // --
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
  // console.log(previousBalanceTotal);
  
  })


