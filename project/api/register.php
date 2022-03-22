<?php
include("connect.php");
$name =$_POST['name'];
$password =$_POST['pass'];
$province =$_POST['province'];




$insert = mysqli_query($connect,"INSERT INTO user(name,pass,province,role,status,votes) VALUES('$name','$password','$province',0,0,0)" );
if($insert){
    echo` <script>
    alert("sucess");
    window.location="../"
    </script>
    `;
    }
    else{
        echo` <script>
    alert("error");
    window.location="../"
    </script>
    `;
    }
    
