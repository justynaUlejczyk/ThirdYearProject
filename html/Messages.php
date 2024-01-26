<!DOCTYPE html>
<html>

<head>
    <title>Messages</title>
    <link rel="stylesheet" href="../css/Messages.css">
    <link rel="stylesheet" href="../css/StyleSheet.css">
    <link rel="stylesheet" href="../css/Home.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
    integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
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
        <div class="wrapper">
            <section class="chat-area">
            <header>
                <?php 
                $user_id = mysqli_real_escape_string($conn, $_GET['user_id']);
                $sql = mysqli_query($conn, "SELECT * FROM users WHERE username = {$username}");
                if(mysqli_num_rows($sql) > 0){
                    $row = mysqli_fetch_assoc($sql);
                }else{
                    header("location: users.php");
                }
                ?>
                <a href="users.php" class="back-icon"><i class="fas fa-arrow-left"></i></a>
                <img src="php/images/<?php echo $row['img']; ?>" alt="">
                <div class="details">
                <span><?php echo $row['fname']. " " . $row['lname'] ?></span>
                <p><?php echo $row['status']; ?></p>
                </div>
            </header>
            <div class="chat-box">

            </div>
            <form action="#" class="typing-area">
                <input type="text" class="incoming_id" name="incoming_id" value="<?php echo $user_id; ?>" hidden>
                <input type="text" name="message" class="input-field" placeholder="Type a message here..." autocomplete="off">
                <button><i class="fab fa-telegram-plane"></i></button>
            </form>
            </section>
        </div>
     </main>



</body>


</html>