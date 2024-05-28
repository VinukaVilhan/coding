<?php
// Require the Composer autoloader
require '../vendor/autoload.php';

// Create the Transport
$transport = (new Swift_SmtpTransport('smtp.gmail.com', 587, 'tls'))
    ->setUsername('vinukacr7@gmail.com')
    ->setPassword('vnxv ahhz opiy sziu');

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Get form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $messageBody = $_POST["message"];

    // File upload
    $fileTmpPath = $_FILES['file']['tmp_name'];
    $fileName = $_FILES['file']['name'];
    
    // Create a message
    $message = (new Swift_Message('New Feedback Submission'))
        ->setFrom([$email => $name]) // Set sender's email and name
        ->setTo(['vinukacr7@gmail.com' => 'Your Name']) // Set recipient's email and name
        ->setBody("Name: $name\nEmail: $email\nMessage: $messageBody");

    // Attach the file
    if (!empty($fileName)) {
        $message->attach(Swift_Attachment::fromPath($fileTmpPath)->setFilename($fileName));
    }

    // Send the message
    if ($mailer->send($message)) {
        echo json_encode(['success' => true, 'message' => 'Your feedback has been submitted. Thank you!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
}
