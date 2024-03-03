<?php

session_id("userSession");
    session_start();
    if (!isset($_SESSION["username"])) {
        header('Location: ' . "register.php");
    }

    require_once "connect_db.php";
function setComments($conn){

    if (isset ($_POST['commentSubmit'])){
        $user_id =  $_POST['user_id'];
        $date =  $_POST['date'];
        $message =  $_POST['message'];

        $query = "INSERT INTO comments(user_id, date, message) VALUES($1, $2, $3)";
        $result = pg_query_params($conn, $query, array($user_id, $date, $message));

    }
}
    function getComments($conn){

        $query = "SELECT * FROM comments";
        $result = pg_query($conn, $query);
        while($row = pg_fetch_assoc($result)){
            echo "<div class  = 'comments-box'><p>";
                echo $row['user_id']."<br><br>";
                echo $row['date']."<br><br>";
                echo nl2br($row['message']);
            echo  "</p>
            <form class = 'delete-form method = 'POST' action = '".deleteComments($conn)."'>
                    <input type='hidden' name='id' value ='" .$row['id']."' >
                    <button type = 'submit' name = 'commentDelete' >Delete</button>
                </form>
                <form class = 'edit-form method = 'POST' action = 'editcomment.php'>
                    <input type='hidden' name='id' value ='" .$row['id']."' >
                    <input type='hidden' name='user_id' value ='" .$row['user_id']."' >
                    <input type='hidden' name='date' value ='" .$row['date']."' >
                    <input type='hidden' name='message' value ='" .$row['message']."' >
                    <button>Edit</button>
                </form>
            </div>";
        }
    }
    // function editComments($conn){
    //     if (isset ($_POST['commentSubmit'])){
    //         $id =  $_POST['id'];
    //         $user_id =  $_POST['user_id'];
    //         $date =  $_POST['date'];
    //         $message =  $_POST['message'];

    //         $query = "UPDATE comments SET message = '$message' WHERE id = '$id'" ;
    //         $result = pg_query_params($conn, $query, array($id, $user_id, $date, $message));
    //         header ("Location: index.php");

    //     }
    // }
    function deleteComments ($conn){
        if (isset ($_POST['commentDelete'])){
            $id =  $_POST['id'];

            $query = "DELETE FROM comments WHERE id = '$id'";
            $result = pg_query_params($conn, $query, array($id));
            header ("Location: index.php");
        }
    }

?>