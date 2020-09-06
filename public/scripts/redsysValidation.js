function merchantValidationEjemplo(){
    //Insertar validaciones…
    return true;
}
            


window.addEventListener("message", function receiveMessage(event) {
    storeIdOper(event,"token", "errorCode", "merchantValidationEjemplo");
});