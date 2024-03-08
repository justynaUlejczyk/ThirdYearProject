<?php
require_once "../php/connect_db.php";
$username = $_POST["username"];
$postsRESULT = pg_query($conn, "SELECT * FROM post  WHERE username='$username' ORDER BY postid ASC");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?php echo "$username"?></h1>
    <table>
        <tr>
            <th>Post ID</th>
            <th>Post caption</th>
            <th>Post image</th>
            <th>Delete post</th>
        </tr>
            <?php while ($row = pg_fetch_assoc($postsRESULT)){
                $postid = $row['postid'];
                $text = $row['text'];
                $post_image_path = "../post_images/post_image" . $postid . ".png";
                echo "<tr><td>$postid</td> 
                          <td>$text</td>
                          <td><img src='$post_image_path' alt='post image' width=600 height=600></td>
                          <td><form action='../php/admin_delete_post.php', method='post'><input type='hidden' id='postid' name='postid' value=$postid><input type='submit' value='delete'></form></td>
                      </tr>";
            }
            ?>
    </table>
</body>
</html>