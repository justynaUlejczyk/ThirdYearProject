<?php
    session_start();
    if (! isset($_SESSION["user_id"])){
        header('Location: '."../html/login.html"); // redirect the user to the register page if they have not already logged in
    }
        // Connect to the database
        require_once "connect_db.php";
    
        $stmt = pg_prepare($conn, "insert_post", "INSERT INTO posts (user_id, text) VALUES ($1, $2) RETURNING post_id");
        
        $user_id = $_SESSION['user_id'];
        $text = $_POST['text'];

        $result = pg_execute($conn, "insert_post", array($user_id, $text));
         if ($result) {
            echo "Post created successfully!";
            $post_id = pg_fetch_result($result, 0, 'post_id');

        } else {
            echo "Error: " . pg_last_error($conn);
        }
    
        $uploaddir = '../post_images/';
        $uploadfile = $uploaddir . "post_image". $post_id . ".png";
        //Add the image associated with the post to the post_images directory with the the number of the post_id linked to the image so it can be found easily
        if(move_uploaded_file($_FILES['post_image']['tmp_name'], $uploadfile)){
        echo "File was successfully uploaded.\n";
        }else{
        echo "Possible file upload attack!\n";
        }
        
        // Close the connection
        pg_close($conn);
        header('Location: '."../html/Home.html");