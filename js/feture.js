// add-money-form
// cash-out-form
// latest-payment 

// add-money
// cash-out 


document.getElementById('add-moneyBtn').addEventListener('click', function(){
      
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('latest-payment').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
})

document.getElementById('cash-outBtn').addEventListener('click', function(){
      
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('latest-payment').classList.add('hidden')
    document.getElementById('add-money-form').classList.add('hidden')

})
