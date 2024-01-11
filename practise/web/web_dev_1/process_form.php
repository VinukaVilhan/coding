<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the email from the POST data
    $email = isset($_POST["email"]) ? $_POST["email"] : "";

    // Validate the email
    $result = validateEmail($email);

    // Send the validation result as a JSON response
    header('Content-Type: application/json');
    echo json_encode(['result' => $result]);
}

function validateEmail($email) {
    $at = strpos($email, "@");
    $dot = strrpos($email, ".");
    $firstPart = substr($email, 0, $at);
    $regex = '/^[a-zA-Z0-9]+$/';

    if ($at === false) {
        return "Please add the @ symbol";
    } elseif ($at < 1 || $dot < $at + 2 || $dot + 2 >= strlen($email) || !preg_match($regex, $firstPart)) {
        return "This email is not valid";
    } else {
        return "This email is valid";
    }
}
?>
