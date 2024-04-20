<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "quiz-app";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Check if the form data was sent and the username is not empty
if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST['username'])) {
  // Get the username from the form data
  $username = $_POST['username'];

  // Prepare and bind the SQL statement
  $stmt = $conn->prepare("INSERT INTO user (name) VALUES (?)");
  $stmt->bind_param("s", $username);

  // Execute the statement
  if ($stmt->execute()) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $stmt->error;
  }

  // Close the statement
  $stmt->close();
} else {
  echo "Please enter your name";
}

// Close the connection
$conn->close();
?>






