<?php
session_start();
    if (!isset($_SESSION["username"])) {
        header('Location: ' . "./login.php");
    }

    require_once "../php/connect_db.php";

    $username = $_SESSION["username"];
    

?>
<!DOCTYPE html>
<html>

<head>
<div class="container">

<form id ="messages" action="../php/send_message.php" method="post">

<label for="recipient">Sent to:</label><br>
  <input type="text" id="recipient" name="recipient"><br>
 
  <label for="text">message:</label><br>
  <input type="text" id="text" name="text">

  <input type="text" class="username" name="username" value="<?php echo $username; ?>" hidden>
  <button type="submit"><i class="fab fa-telegram-plane"></i></button>
</form>
</div>

    <title>Messages</title>
    <link rel="stylesheet" href="../css/Messages.css">
    <link rel="stylesheet" href="../css/StyleSheet.css">
    <link rel="stylesheet" href="../css/Home.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <script src="../js/Home.js"></script>
    <script src="../js/main.js"></script>
</head>

<!-- test commit -->

<!-- test commit - branch demo -->

<body>
    <nav>
        <subnav>
            <ul>
                <li>
                    <a>
                        <img src="../images/cat.jpg" class="nav-profile">
                    </a>
                </li>
    
                <li>
                    <div class="dropdown">
                        <button class="dropButton">
                            <img class="noti" src="../images/icons/nav-icons/bell-svgrepo-com.svg" alt="notifications"
                                width="35" />
                        </button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </li>
            </ul>
        </subnav>
    
        <nav>
    
    
            <section>
                <form id="searchForm" action="">
                    <input id="searchInput" type="search" required>
                    <i class="fa fa-search"></i>
                </form>
    
            </section>
    
            <section>
                <ul class="linksBar">
                    <li>
                        <a href="../html/Home.php">
                            <img src="../images/icons/nav-icons/home-svgrepo-com.svg" alt="home" width="35" />
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="../images/icons/nav-icons/magnifer-svgrepo-com.svg">
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="../images/icons/nav-icons/add-square-svgrepo-com.svg">
                        </a>
                    </li>
                    <li>
                        <a href="../html/Group.php">
                            <img src="../images/icons/nav-icons/users-group-two-rounded-svgrepo-com.svg" alt="groups"
                                width="35" />
                            <span>Groups</span>
                        </a>
                    </li>
                    <li>
                        <a href="../html/Messages.php">
                            <img src="../images/icons/nav-icons/chat-round-line-svgrepo-com.svg" alt="messages"
                                width="35" />
                            <span>Messages</span>
                        </a>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="dropButton">
                                <img src="../images/icons/nav-icons/bell-svgrepo-com.svg" alt="notifications" width="35" />
                            </button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <span>Notifications</span>
                    </li>
    
                    <a href="../html/Profile.php">
                        <img class="nav-profile" src="../images/cat.jpg" />
                    </a>
    
                </ul>
            </section>
        </nav>
  
    <main>

    <body>
        <div class = "chat-container">
        
            <?php

$stmt = pg_prepare($conn, "read_message", "SELECT * FROM messages WHERE username = $1 OR recipient = $1 ORDER BY messageID DESC");
$result = pg_execute($conn, "read_message", array($username));

$numRows = pg_num_rows($result);
echo "<p>Total Messages: $numRows</p><br>"; // Display total number of messages

if ($numRows > 0) {
    echo "<p>New message!</p><br>"; // Display this only once

    while ($row = pg_fetch_assoc($result)) {
        $text = $row["text"];
        $sender = $row["username"];
        $recipient = $row["recipient"];

        echo "<br>Recipient: $recipient<br>
              Sender: $sender<br>
              Message: $text<br>";
    }
} else {
    echo "No messages";
}

// Close the PostgreSQL connection
pg_close($conn);
?>

</div>
     
        </div>
     </main>



</body>


</html>
