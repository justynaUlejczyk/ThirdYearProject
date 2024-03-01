<?php
    // session_id("userSession");
    // session_start();
    // if (!isset($_SESSION["username"])) {
    //     header('Location: ' . "register.php");
    // }

    require_once "connect_db.php";


include 'comments.php';
date_default_timezone_set("Europe/London");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<?php
echo" <form method = 'POST' action = '".setComments($conn)."' >
    <input type='hidden' name='user_id' value='Anonymous'>
    <input type='hidden' name='date' value='". date('Y-m-d H:i:s')."'>
    <textarea name='message'></textarea><br>
    <button type='submit' name = 'commentSubmit'>Comment</button>
</form>";

getComments($conn);
pg_close($conn);

?>

</body>
</html>