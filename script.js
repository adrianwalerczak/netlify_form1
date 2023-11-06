// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.getElementById("loginForm");

//     loginForm.onsubmit = function () {
//         console.log("abc");
//         return false; // Zapobiegamy domyślnej akcji przesyłania formularza
//     };
// });




localStorage.setItem("language", "pl");

sessionStorage.setItem("cosTam", "alaMaKota");

document.cookie = "my_cookie=my_sensitive_data; HttpOnly; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";



