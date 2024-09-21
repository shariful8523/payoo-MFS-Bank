

document .getElementById('add-money') .addEventListener('click', function(event){
    event.preventDefault();
     


     const addMonyInput = document.getElementById('input-ammount').value;
     
     const addCodeInput = document.getElementById('code').value;

     if(addCodeInput === '1234'){
        
        const balance = document.getElementById('totalamount').innerText;
        

        const addMonyNumber = parseFloat(addMonyInput);
        const addBalanceNumber = parseFloat(balance);
        
        const newBalance = addMonyNumber + addBalanceNumber ;
        
       document.getElementById('totalamount').innerText = newBalance;






     }

     else{
        alert('Enter the Right Code')
     }
       
   
    




})