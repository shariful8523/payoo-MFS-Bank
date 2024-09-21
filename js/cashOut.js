

document .getElementById('cash-out') .addEventListener('click', function(event){
   event.preventDefault();

    const inputCash = document.getElementById('cash-input-ammount').value;
    const inputCashPin = document.getElementById('cash-code').value;
     

    if(inputCashPin === '1234'){
        
        const cashOutbalance = document.getElementById('totalamount').innerText;
        

        const cashbalance = parseFloat(cashOutbalance);
        const addBalance = parseFloat(inputCash);
        
        const newBalance = cashOutbalance - addBalance ;
        
       document.getElementById('totalamount').innerText = newBalance;










    }

    else{
        alert(' Enter the Right code')
    }



    
})