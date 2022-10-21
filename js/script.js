var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var c_password = document.getElementById("c_password");
var username_error = document.querySelector(".username-error");
var email_error = document.querySelector(".email-error");
var password_error = document.querySelector(".password-error");
var c_password_error = document.querySelector(".c_password-error");

var regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validate() {

    if (username.value == null || username.value == "") {
        username_error.innerHTML = "please enter username !";
        username.style.borderColor = "red";
        return false;

    } else if (username.value.length < 3) {
        username_error.innerHTML = "enter valid username !";
        username.style.borderColor = "red";
        return false;

    } else {
        username_error.innerHTML = "";
        username.style.borderColor = "green";

        if (email.value == null || email.value == "") {
            email_error.innerHTML = "please enter email !";
            email.style.borderColor = "red";
            return false;

        } else if (!email.value.match(regex_email)) {
            email_error.innerHTML = "Enter valid email !";
            email.style.borderColor = "red";
            return false;

        } else {
            email_error.innerHTML = "";
            email.style.borderColor = "green";

            if (password.value == null || password.value == "") {
                password_error.innerHTML = "please enter password !";
                password.style.borderColor = "red";
                return false;

            } else if (password.value.length < 6) {
                password_error.innerHTML = "password must be atleast 6 characters !";
                password.style.borderColor = "red";
                return false;

            } else {
                password_error.innerHTML = "";
                password.style.borderColor = "green";

                if (c_password.value == null || c_password.value == "") {
                    c_password_error.innerHTML = "please confirm password !";
                    c_password.style.borderColor = "red";
                    return false;

                } else if (password.value != c_password.value) {
                    c_password_error.innerHTML = "password don't match !";
                    c_password.style.borderColor = "red";
                    return false;

                } else {
                    c_password_error.innerHTML = "";
                    c_password.style.borderColor = "green";
                    alert("Registration successful !");
                    return true;
                }
            }
        }
    }
}
