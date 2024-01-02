function validateEmail() {
    var email = document.getElementById("email").value;
    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");
    var firstPart = email.substring(0, at);
    var regex = /^[a-zA-Z0-9]+$/;

    if (at === -1) {
        document.getElementById("message").innerHTML = "Please add the @ symbol";
        document.getElementById("email").title = "Please add the @ symbol";
    } else if (at < 1 || dot < at + 2 || dot + 2 >= email.length || !regex.test(firstPart)) {
        document.getElementById("message").innerHTML = "This email is not valid";
        document.getElementById("email").title = "This email is not valid";
    } else {
        document.getElementById("message").innerHTML = "This email is valid";
        document.getElementById("email").title = "This email is valid";
    }
}
