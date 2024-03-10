<?php
require_once "connect_db.php";
$postid = $_POST["postid"];
$delete_user = pg_query($conn, "DELETE FROM post where postid='$postid'");
//header('Location: ../html/admin.php');