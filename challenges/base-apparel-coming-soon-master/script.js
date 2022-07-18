
let formInput = document.querySelector(".form-input");
let warningPlaceholder = document.querySelector(".error-msg");
let warningIcon = document.querySelector(".error-input");
formInput.addEventListener("invalid", activateWarnings);
formInput.addEventListener("input",removeWarnings )

function activateWarnings(){
    formInput.classList.add("outline-error");
    warningPlaceholder.innerHTML="Please provide a valid email";
    warningIcon.classList.remove("hidden");
}
function removeWarnings(){
    formInput.classList.remove("outline-error");
    warningPlaceholder.innerHTML="";
    warningIcon.classList.add("hidden");

}