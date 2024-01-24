<?php
if (isset($_POST['register'])) {
    // Connect to the database
  require_once "connect_db.php";

    // Prepare and execute the SQL statement
    $stmt = pg_prepare($conn, "insert_user", "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING user_id");
    
    // Get the form data
    //$name = $_POST["name"];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Hash the password
    $password = password_hash($password, PASSWORD_DEFAULT);

    // Execute the SQL statement
    $result = pg_execute($conn, "insert_user", array($username, $email, $password));

    // Check the result
    if ($result) {
        echo "New account created successfully!";
        $user_id = pg_fetch_result($result, 0, 'user_id');
        session_start();
        $_SESSION['user_id'] = $user_id;
        $_SESSION['username'] = $username;
        header('Location: '."../html/Home.html");
    } else {
        echo "Error: " . pg_last_error($conn);
    }

    // Close the connection
    pg_close($conn);
}
