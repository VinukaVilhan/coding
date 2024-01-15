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
$salary = $_POST['salary'];
$username = $_POST['username'];
$password = $_POST['password'];

// Prepare and execute SQL statement
$sql = "INSERT INTO info (salary, username, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("isi", $salary, $username, $password);

if ($stmt->execute()) {
    echo "New user registered successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
