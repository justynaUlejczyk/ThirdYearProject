<?php # CONNECT TO MySQL DATABASE.
# Connect on 'localhost' for user to database 'site_db'
$link = mysqli_connect('localhost','user-NAME','password',
'site_database'); 
if (!$link) { 
# Display error masseage, if fail 
die('Could not connect to MySQL: ' . mysqli_error()); 
} 
#testing connection, after connection esatblished - delete; 
echo 'Connection OK'; 
?>
