// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.getElementById("loginForm");

//     loginForm.onsubmit = function () {
//         console.log("abc");
//         return false; // Zapobiegamy domyślnej akcji przesyłania formularza
//     };
// });




localStorage.setItem("language", "pl");

sessionStorage.setItem("KeyAla", "ValueAlaMaKota");

// Ustawienie ciasteczka
document.cookie = "zwykle_cookie=zakalec; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";

document.cookie = "httpOnlyCookie=dane_wrazliwe; HttpOnly; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";

console.log(document.cookie)

