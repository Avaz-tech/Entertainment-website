

const form  = document.querySelector('.contact_form');
function sendMsg(e){
    e.preventDefault();
    
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const msg = document.querySelector('.msg');

    //Funciton to send email

    Email.send({
        SecureToken : "d0d47027-a8ca-415c-8bc1-f7d310f2e7ca",
        To : 'avazbekravshanov2@gmail.com',
        From : email.value,
        Subject : "Contact Form ",
        Body : msg.value
        }).then(
            message => alert(message)
          );

}

// Add event listener submit
form.addEventListener('submit',sendMsg);
             
