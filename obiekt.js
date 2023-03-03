function klik(){
    showAlert = function() {
        alert("opóźniony komunikat");
    }
    window.setTimeout(showAlert, 5000);
}