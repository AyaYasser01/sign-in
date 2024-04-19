let Login = document.querySelector(".Login");
let create = document.querySelector(".create");
let container = document.querySelector(".container");

Login.onclick = function() {
    container.classList.add("signinForm");
}
create.onclick = function() {
    container.classList.remove("signinForm");
}


console.log(Login);
console.log(container);
console.log(create);