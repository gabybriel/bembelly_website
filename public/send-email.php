<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: {$field}"]);
        exit();
    }
}

// Admin email address
$admin_email = 'gabysbriel@gmail.com';

// Prepare email content
$subject = "New Contact Form Submission: {$data['subject']}";

$message = "New contact form submission received:\n\n";
$message .= "Name: {$data['name']}\n";
$message .= "Email: {$data['email']}\n";
$message .= "Phone: {$data['phone']}\n";
$message .= "Subject: {$data['subject']}\n\n";
$message .= "Message:\n{$data['message']}\n";

// Email headers
$headers = "From: {$data['email']}\r\n";
$headers .= "Reply-To: {$data['email']}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($admin_email, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>