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
      sage)
    );
}
//Add event Listener submit
