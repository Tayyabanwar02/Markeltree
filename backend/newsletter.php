<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Extract form data
    $name = $data['name'] ?? 'Anonymous';
    $email = $data['email'] ?? '';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit;
    }

    // Format name and email
    $name = ucwords(strtolower(trim($name)));
    $email = strtolower(trim($email));

    // CSV file path
    $csvFile = '../data/newsletter_new.csv';
    $csvDir = dirname($csvFile);

    // Create directory if it doesn't exist
    if (!file_exists($csvDir)) {
        mkdir($csvDir, 0755, true);
    }

    // Read existing emails
    $existingEmails = [];
    if (file_exists($csvFile)) {
        if (($handle = fopen($csvFile, "r")) !== FALSE) {
            // Skip header row
            fgetcsv($handle);
            while (($data = fgetcsv($handle)) !== FALSE) {
                if (isset($data[1])) {
                    $existingEmails[] = strtolower(trim($data[1]));
                }
            }
            fclose($handle);
        }
    }

    // Check if email already exists
    if (in_array($email, $existingEmails)) {
        http_response_code(409);
        echo json_encode(['success' => false, 'message' => '⚠️ Email already subscribed']);
        exit;
    }

    // Append to CSV file
    if (($handle = fopen($csvFile, "a")) !== FALSE) {
        if (!file_exists($csvFile)) {
            // Add header if file is new
            fputcsv($handle, ['Name', 'Email']);
        }
        fputcsv($handle, [$name, $email]);
        fclose($handle);
        echo json_encode(['success' => true, 'message' => '✅ Successfully subscribed to newsletter']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to save subscription']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
