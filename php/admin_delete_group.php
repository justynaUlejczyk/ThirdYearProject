<?php
require_once "connect_db.php";
$groupid = $_POST["groupid"];
$delete_user = pg_query($conn, "DELETE FROM groups where groupid='$groupid'");
header('Location: ../html/admin.php');