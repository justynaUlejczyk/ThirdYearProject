<?php

require_once "connect_db.php";
$groupname = $_POST["groupname"];
$groupid = $_POST["groupid"];

$update_groupnameSTMT = pg_prepare($conn, "update_groupname", "UPDATE groups SET groupname = $1 WHERE groupid = $2");
$update_groupnameRESULT = pg_execute($conn, "update_groupname", array($groupname, $groupid));
