<?php
$user=$_SESSION["username"];
$notificationQuery = pg_prepare($conn, "list", "SELECT * FROM notifications WHERE username = $1 ORDER BY notificationID DESC LIMIT 3");
$notificationResult = pg_execute($conn, "list", array($user));
$NumbRows = pg_num_rows($notificationResult);

if ($NumbRows > 0) {
    $counter = 0;
    while ($row = pg_fetch_assoc($notificationResult)) {
        $notification = $row['notifmessage'];
        $timestamp = $row['timestamp'];
        $killtime = $row['killtime'];
        if (strtotime($killtime) >= strtotime(date("Y-m-d"))){
            $time= $row['timestamp'];
            echo "<p> $notification </p><br>";
        }
    }
} else {
    echo "<p>No notifications yet...</p>";
}
?>
