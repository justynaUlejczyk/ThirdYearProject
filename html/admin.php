<?php
require_once "../php/connect_db.php";
$usersRESULT = pg_query($conn, "SELECT * FROM accounts ORDER BY username ASC");
$groupsRESULT = pg_query($conn, "SELECT * FROM groups ORDER BY groupid ASC");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <th>Username</th>
            <th>Delete user?</th>
        </tr>
            <?php while ($row = pg_fetch_assoc($usersRESULT)){
                $username = $row['username'];
                echo "<tr><td><form method='post' action='admin_view_user.php'>
                <input type='hidden' name='username' value='$username'/> 
                <a onclick='this.parentNode.submit();'>$username</a></form></td> 
                <td><form action='../php/admin_delete_user.php', method='post'><input type='hidden' id='username' name='username' value=$username><input type='submit' value='delete'></form></td></tr>";
            }
            ?>

    </table>
<hr>
    <table>
        <tr>
            <th>Group name</th>
            <th>Delete group?</th>
        </tr>
        <tr>
            <?php while ($row = pg_fetch_assoc($groupsRESULT)){
                $group_name = $row['groupname'];
                $groupid = $row['groupid'];
                echo "<tr><td>$group_name</td> <td><form action='../php/admin_delete_group.php', method='post'><input type='hidden' id='groupid' name='groupid' value=$groupid><input type='submit' value='delete'></form></td></tr>";
            }
            ?>
        </tr>

    </table>
    
</body>
</html>