// INIT
function getInputValue() {
let myString = document.getElementById("inputId").value;
let myPassword = document.getElementById("inputPass").value;
// PROCESS
var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
document.getElementById("original").innerHTML = myString;
document.getElementById("zaszyfrowane").innerHTML = encrypted;
document.getElementById("zdeszyfrowane").innerHTML = decrypted;
document.getElementById("tekst").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}

