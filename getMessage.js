// Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate data
function validateForm(){

   clearMessages();

   if(nameInput.value.length < 1){
      errorNodes[0].innerText = "Name cannot be blank";
      
      nameInput.classList.add("error-border");  
   } 

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
    }

   //Clear error / success messages

   function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++)
    {
      errorNodes[i].innerText = ""; 
    }
     nameInput.classList.remove("error-border"); 

   }
   
   //check if email is valid
   function emailIsValid(email){
        let pattern = /\S+@\S+\.\S+/;
        return pattern.test(email);
   }
}  