<?php 
    session_start();
    include("connect.php");
    
    $name=$_POST['user'];
    $password=$_POST['pass'];
    $role=$_POST['role'];

    $check=mysqli_query($connect, "SELECT * from user WHERE name='$name' AND pass='$password' AND role='$role'");

    if(mysqli_num_rows($check))
    {
        $userdata=mysqli_fetch_array($check);
        $groups=mysqli_query($connect,"SELECT *from user WHERE role=2");
        $groupsdata=mysqli_fetch_all($groups,MYSQLI_ASSOC);

        $_SESSION['userdata']=$userdata;
        $_SESSION['groups']=$groupsdata;

        echo'
            <script>
                window.location="../dashboard/dashboard.php";
                </script>
            '
            ; 
    }
    else{
        echo'
            <script>
                alert("Invalid credential");
                window.location="../login/login.html";
                </script>
            '
            ; 
    }
?>
