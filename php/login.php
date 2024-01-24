<?php
if (isset($_POST['login'])) {
    // Connect to the database
  require_once "connect_db.php";

    $stmt = pg_prepare($conn, "find_user", "SELECT * FROM users WHERE username = $1");

    $username = $_POST['username'];
    $user_entered_password = $_POST['password'];

    $result = pg_execute($conn, "find_user", array($username));

    if (pg_num_rows($result) == 0){
        echo "invalid username";
        die();
    }

    $stored_password = pg_fetch_result($result, 0, 'password');

    if (! password_verify($user_entered_password, $stored_password)) {
        echo "Incorrect password";
        die();
        
    }

    
    pg_close($conn);
    session_start();
    //$_SESSION['user_id'] = $user_id;
    $_SESSION['username'] = $username;
    header('Location: '."../html/Home.html");
}
