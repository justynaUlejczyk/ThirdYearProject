<?php
require_once "connect_db.php";
session_start();
if (!isset($_SESSION["username"])) {
    header('Location: ' . "./login.php");
    exit(); // Ensure script stops execution after redirection
}

$user_id = $_SESSION["username"];
$date = date('Y-m-d H:i:s');
$post_id = $_POST['postid'];
$comment = $_POST['text'];

$query = "INSERT INTO comments(username, timestamp, text, postid) VALUES($1, $2, $3, $4) RETURNING commentid;";
$result = pg_query_params($conn, $query, array($user_id, $date, $comment, $post_id));

if ($result) {
    $postquery = pg_prepare($conn, "post_name", "SELECT * FROM post WHERE postid = $1");
    $postresult = pg_execute($conn, "post_name", array($post_id));
    $postRow = pg_fetch_assoc($postresult);
    $post_user = $postRow['username'];
    exit();
}

    $query2 = pg_prepare($conn, "delete", "DELETE FROM comments WHERE username = $1 AND postid = $2");
    $stmt2 = pg_execute($conn, "delete", array($user_id, $post_id));

    if ($stmt2) {
        header('Location: ../html/Home.php');
        exit();
    } else {
        echo "Failed to delete the comment.";
    }

pg_close($conn);
?>
