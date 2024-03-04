
<?php

require_once "../php/connect_db.php";

session_id("userSession");
session_start();
if (!isset($_SESSION["username"])) {
    header('Location: ' . "./login.php");
    exit(); // Make sure to exit after redirecting
}
$login_username = $_SESSION["username"];
session_write_close();
session_id("groupSession");
session_start();
// Get passed product genre and assign it to a variable.
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $_SESSION["groupid"] = $id;
}
$groupid = $_SESSION["groupid"];

// Corrected variable names
$followee = $_GET['name'];
$group = $_SESSION['groupid']; // Using session variable directly

//check if not following user yet
$stmtFollowee = pg_prepare($conn, "check", "SELECT * from follows Where followee = $1 and username = $2");
$stmtEx = pg_execute($conn, "check", array($followee, $login_username));
if($stmtEx)
{
 echo "you already follow $followee";
}else{

// Assuming $conn is properly initialized
$stmt = pg_prepare($conn, "followers", "INSERT INTO  follows (username, followee) VALUES ($1, $2)");
$result = pg_execute($conn, "followers", array( $login_username, $followee)); // Using $result instead of $result2
if ($result) {
   header ('Location: ../html/messages.php');
} else {
    echo "Error: " . pg_last_error($conn);
    die();
}}
pg_close($conn);
?>

