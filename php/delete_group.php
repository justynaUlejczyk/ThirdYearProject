<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    // Redirect user to login page or handle unauthorized access
    header("Location: login.php");
    exit();
}

// Include database connection
require_once "../php/connect_db.php";

$login_username = $_SESSION["username"];

// Check if the group ID is provided
if (!isset($_GET['id'])) {
    // Redirect user or display an error message
    echo "No group ID provided.";
    exit();
}

// Get the group ID from the URL
$group_id = $_GET['id'];

// Prepare a delete statement
$query = pg_prepare($conn, "delete_group", "DELETE FROM groups WHERE groupid = $1");
$query2= pg_prepare($conn, "delete_group2", "DELETE FROM accounttogroup WHERE groupid = $1");
try {
    // Prepare the statement
    $stmt2 = pg_execute($conn, "delete_group2", array($group_id));
    $stmt = pg_execute($conn, "delete_group", array($group_id));
    

    
    // Attempt to execute the prepared statement
    if ($stmt && $stmt2) {
        
            // Group deleted successfully
            header('Location: ../html/group.php');
        
    } else {
        // Error occurred, display an error message
        echo "Error executing deletion.";
    }

    // Close statement
    $stmt = null;
} catch (Exception $e) {
    // Handle any exceptions
    echo "An error occurred: " . $e->getMessage();
}

// Close connection
$conn = null;
?>
