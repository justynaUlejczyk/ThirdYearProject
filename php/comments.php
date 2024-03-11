<?php

session_id("userSession");
    session_start();
    if (!isset($_SESSION["username"])) {
        header('Location: ' . "register.php");
    }

    require_once "connect_db.php";

    if (isset ($_POST['commentSubmit'])){
        $user_id =  $_SESSION["username"];
        $date =  date('Y-m-d H:i:s');
        $comment =  $_POST['text'];
        $post_id = $_POST['postid'];

        $query = "INSERT INTO comments(username, timestamp, text, postid) VALUES($1, $2, $3, $4) Return commentid";
        $result = pg_query_params($conn, $query, array($user_id, $date, $comment, $post_id));
        if ($result) {
            header('Location: ../html/Home.php');
            exit(); // Make sure to exit after sending the header to prevent further execution
        }
    }

?>