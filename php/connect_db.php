<?php # CONNECT TO PostgreSQL DATABASE.
$host = "localhost";
$port = "5432";
$dbname = "projectdb";
$user = "postgres";
$password = "RuKhTB3wn6&Y%z3yD9";

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
if (!$conn) { 
# Display error masseage, if fail 
die('Could not connect to MySQL: ' . pg_last_error()); 
} 
#testing connection, after connection esatblished - delete; 
echo 'Connection OK'; 
?>
