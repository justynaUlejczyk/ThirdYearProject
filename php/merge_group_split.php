<?php
require_once "connect_db.php";
$groupname = $_POST["groupname"];

$folderPathA = "../groups/" . $groupname; 
$folderPathB = "../groups/" . $groupname . "B";

$merge = $_POST["merge"];

if($merge == "A"){
    
}