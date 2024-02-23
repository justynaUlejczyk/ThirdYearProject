<?php
require_once("connect_db.php");

$username = $_POST['username'];
$STMT = pg_prepare($conn, "check_username", "SELECT * FROM accounts WHERE username=$1");
$result = pg_execute($conn, "check_username", array($username));

if (pg_num_rows($result) > 0) {
    echo "Username already taken";
} else {
    echo "Username available";
}

pg_close($conn);