<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form_data";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$email = $_POST['email'];
$password = $_POST['password'];
$race = $_POST['race'];
$age = $_POST['age'];

// Prepare and execute SQL statement
$sql = "INSERT INTO marathon (first_name, last_name, email, password, race, age) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssss", $f_name, $l_name, $email, $password, $race, $age);

if ($stmt->execute()) {
    echo "New user registered successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
