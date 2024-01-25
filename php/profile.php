<?php
    session_start();
    if (!isset($_SESSION["user_id"])) {
        header('Location: ' . "./register.php"); // Redirect the user to the register page if they have not already logged in
    }

    // Assuming you have a database connection
    require_once "connect_db.php";

    #Prepare the SQL statement with a placeholder for the user ID
    $stmt = pg_prepare($conn, "select_user_groups", "SELECT * FROM users WHERE userID=$1");  //check if name of users table
    if ($stmt === false) {
        die("Error preparing statement");
    }
    
    // Execute the prepared statement with the user ID
    $result = pg_execute($conn, "select_user_profile", array($user_id));
    if ($result === false) {
        die("Error executing statement");
    }
    
    // Check if there are any groups
    if (pg_num_rows($result) > 0) {
        while ($row = pg_fetch_assoc($result)) {
            $name = $row["name"]; //check for database names!!!
            echo "<div>";
            echo "<h2>{$name}</h2>";
            echo "</div>";
        }
    } else {
        echo "No groups yet...";
    }
    
    // Close the database connection
    pg_close($conn);
    ?>

    ?>