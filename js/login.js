

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault()
   

    const phoneNumber = document.getElementById('phone-number').value;
    const pinCode = document.getElementById('pin-code').value;
   

    if(phoneNumber=== '01307376982' && pinCode === '1234'){
        console.log('You are login');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong phone number and pin');
    }

     
})