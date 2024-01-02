function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var usernameError = document.getElementById("username_error");
    var emailError = document.getElementById("email_error");
    var passwordError = document.getElementById("password_error");

    if (!testUsername(username)) {
        usernameError.innerHTML = "Username is incorrect. It should be more than 5 characters";
        return false;
    }

    if (!testEmail(email)) {
        emailError.innerHTML = "The email is incorrect";
        return false;
    }

    if (!testPassword(password))
    {
        passwordError.innerHTML = "The password is incorrect";
        return false;
    }

    alert("Form is submitted successfully");
    return true;
}

function testEmail(email) {
    var regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

function testUsername(username) {
    return username.length > 5;
}

function testPassword(password)
{

    return password.length > 5;
}