<?php

require_once "connect_db.php";

$filename = $_POST['filename'];
$content = $_POST['content'];
$groupid = $_POST['groupid'];


file_put_contents("../groupFile/" . $filename . ".rtf", $content);
$get_filesSTMT = pg_prepare($conn, "get_files", "INSERT INTO files (groupid, filename, filetype) VALUES ($1, $2,$3)");
$get_filesRESULT = pg_execute($conn, "get_files", array($groupid, ($filename . ".rtf"), ".rtf"));

