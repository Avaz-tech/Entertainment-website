// Get data
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");

//Validate data
function validateForm(){

   clearMessages();
   let errorFlag = false;

   if(nameInput.value.length < 1){
      errorNodes[0].innerText = "Name cannot be blank";
      nameInput.classList.add("error-border");  
      errorFlag = true;
   } 

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[2].innerText = "Pleas e enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }

   //Clear error / success messages

   function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++)
    {
      errorNodes[i].innerText = ""; 
    }
     nameInput.classList.remove("error-border"); 
     email.classList.remove("error-border");

   }
   
   //check if email is valid
   function emailIsValid(email){
        let pattern = /\S+@\S+\.\S+/;
        return pattern.test(email);
   }
}  

//Function to send the email
function sendMsg(e){
    e.preventDefault();
    email.send({
        SecureToken : "9bdaa6ae-acbe-47d7-9a09-7ad52b05d709",
        To : 'avaz.ravshan1@gmail.com',
        From : email.value,
        Subject : "Contact Form",
        Body : message.value
    }).then(
      message => alert(message)
    );
}
//Add event Listener submit
