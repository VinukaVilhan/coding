function submitForm() 
{
    var fName = document.getElementById("f_name").value;
    var lName = document.getElementById("l_name").value;
    var email = document.getElementById("email").value;
    var nic = document.getElementById("nic").value;
   
    if (fName.length < 5)
    {
        alert("First name must be more than 5 characters");
        return false;
    }
    else if (lName.length < 5)
    {
        alert("Last name must be more than 5 characters");
        return false;
    }

    if (!checkEmail(email))
    {
        alert("Incorrect email");
        return false;
    }

    if(!checkNic(nic))
    {
        alert("NIC must contain only numbers and should be 9 characters long");
        return false;
    }

    alert("Form was sucessfully submitted");
    return true; // This is to prevent the form from being submitted
}

function checkEmail(email)
{ 
    var dot = email.lastIndexOf('.');
    var at = email.indexOf('@');

    return( at < 1 || at > dot || dot + 2 >= email.length)? false: true;
}

function checkNic(nic)
{
    var reg = /^[0-9]+$/;
    return(nic.length == 9 && reg.test(nic) )?true : false ;
}