<?php
require_once "connect_db.php";
$username = $_POST["username"];
$delete_user = pg_query($conn, "DELETE FROM accounts where username='$username'");
header('Location: ../html/admin.php');