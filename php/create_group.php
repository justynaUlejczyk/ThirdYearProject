<?php

session_start();
if (!isset($_SESSION["username"])) {
    header('Location: ' . "./login.php");
}
header('Location: ../html/Group.php');

require_once "../php/connect_db.php";

$stmt = pg_prepare($conn, "create_group", "INSERT INTO groups (managerID, groupname) VALUES ($1, $2) RETURNING groupID");
$username = $_SESSION['username'];
$groupname = $_POST['groupname'];

$result = pg_execute($conn, "create_group", array($username, $groupname));

if ($result) {
    echo "Group created successfully!";
    $groupid = pg_fetch_result($result, 0, 'groupid');
    // Create a folder with the group name
    $folderPath = "../groups/" . $groupname; 
    
    if (!file_exists($folderPath)) {
        if (!mkdir($folderPath, 0777, true)) {
            die('Failed to create folders...');
        }
        echo "Folder created successfully!";
    } else {
        echo "Folder already exists!";
    }
    
    // Insert into accountToGroup table
    $stmt2 = pg_prepare($conn, "members", "INSERT INTO accountToGroup (username, groupID) VALUES ($1, $2)");
    $result2 = pg_execute($conn, "members", array($username, $groupid));
    if ($result2) {
        echo "User added to group successfully!";
    } else {
        echo "Error: " . pg_last_error($conn);
        die();
    }

} else {
    echo "Error: " . pg_last_error($conn);
    die();
}

?>
