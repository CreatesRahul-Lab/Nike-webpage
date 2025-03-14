<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydb1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Retrieve form data and sanitize

 $name = $_POST['name'];

 $email = $_POST['email'];

 $phone = $_POST['phone'];

 $message = $_POST['message'];


   


 $stmt = $conn->prepare("INSERT INTO emp (name, email, phone, message) VALUES (?, ?, ?, ?)");

 if ($stmt === false) {

 die("Error preparing statement: " . $conn->error);

 }



 $stmt->bind_param("ssss", $name, $email, $phone, $message);



 if ($stmt->execute()) {

 echo "New record created successfully";

 } else {

 echo "Error: " . $stmt->error;

 }



 $stmt->close();

}


// Close the connection

$conn->close();

?>
