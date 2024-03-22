<?php
require_once "connect_db.php";
$groupname = $_POST["groupname"];

$folderPathA = "../groups/" . $groupname; 
$folderPathB = "../splits/" . $groupname;

$merge = $_POST["merge"];

if($merge == "A"){

}