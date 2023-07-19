const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');


signupBtn.onclick = function () {//jab bhi signup pr click ho
    title.innerHTML = "Sign Up";//title ka name change hokar signup hojae
    nameField.style.display = "block";//or jo name wala option hai woh show ho
}
signinBtn.onclick = function () {//agar jab signin click ho
    title.innerHTML = "Login";//toh title  pr Login show kare
    nameField.style.display = "none";//and name title place get block
}
