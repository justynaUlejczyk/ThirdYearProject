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
$nameQuery =pg_prepare($conn, "name", "SELECT * FROM groups Where groupid = $1");
$stmt = pg_execute($conn, "name", array($group_id));
$group = pg_fetch_assoc($stmt);
$groupname = $group['groupname'];
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

$username = $_SESSION['username'];
$date = date("Y-m-d");

$killTime = new DateTime();
$killTime->modify('+3 weeks');

$mess =  "You deleted $groupname";
$notificationQuery = pg_prepare($conn, "add_notification", "INSERT INTO notifications 
(username, timestamp, killtime, notifmessage) 
VALUES ($1, $2, $3, $4) RETURNING notificationID");
$notificationResult = pg_execute($conn, "add_notification", array($username, $date, $killTime->format('Y-m-d'), $mess));
// Close connection
$conn = null;
?>
