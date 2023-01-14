function sendJSON(mail, pass) {
    let xhr = new XMLHttpRequest();
    let url = "../server/server.js";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };
    let data = JSON.stringify({"login" : mail, "password" : pass});
    xhr.send(data);

}

let RegisterBtn = document.querySelector(`#Register_Btn`);
let Login_Btn = 0;
RegisterBtn.addEventListener(`click`, function () {
    let mail = document.querySelector(`#Mail_SignUp`);
    let mail_err = document.querySelector(`#SignUp_Mail_Err`);
    let pass = document.querySelector(`#Pass_SignUp`);
    let repeat = document.querySelector(`#Repeat_Pass`);
    let pass_err = document.querySelector(`#SignUp_Pass_Err`);
    let repeat_err = document.querySelector(`#Repeat_Pass_Err`);
    let complete_reg = document.querySelector(`#SignUp_Complete`);

    if (!mail.value.includes('@')) {
        mail_err.innerHTML = `It doesn't looks like a valid e-mail adress!`;
        mail.classList.add(`border-danger`);
    } else {
        mail_err.innerHTML = ``;
        mail.classList.remove(`border-danger`);
        mail.classList.add(`border-success`);

    }
    if (pass.value.length < 8) {
        pass_err.innerHTML = `Your password's length is too short!`;
        pass.classList.add(`border-danger`)
    } else {
        pass_err.innerHTML = ``;
        pass.classList.remove(`border-danger`);
        pass.classList.add(`border-success`);
    }
    if (pass.value != repeat.value) {
        repeat.classList.add(`border-danger`);
        repeat_err.innerHTML = `Passwords aren't identical!`;
    } else {
        repeat.classList.remove(`border-danger`);
        repeat.classList.add(`border-success`);
        repeat_err.innerHTML = ``;
    }

    if (repeat.classList.contains(`border-success`) && pass.classList.contains(`border-success`) && mail.classList.contains(`border-success`)) {
        complete_reg.classList.add(`border-success`);
        complete_reg.classList.add(`text-success`);
        complete_reg.innerHTML = `We've sent an email to you. Check your emails to complete registration`;
        sendJSON(mail.value, pass.value)
    }
});