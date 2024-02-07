<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@cokellimited.uk";
    $subject = "New Contact Form Submission";
    
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Combine first name and last name into a full name
    $fullName = $firstName . " " . $lastName;
    
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    $mailBody = "Full Name: $fullName\nPhone: $phone\nEmail: $email\nMessage:\n$message";
    
    // Attempt to send the email
    if (mail($to, $subject, $mailBody, $headers)) {
        // Email sent successfully
        // Optionally, you can redirect the user to a thank-you page
        header("Location: success.html");
        exit;
    } else {
        // Email failed to send
        echo "Error sending email. Please try again later.";
    }
}
?>
