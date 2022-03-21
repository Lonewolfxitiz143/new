<?php
include("connect.php");
$name =$_POST["name"];
$password =$_POST["pass"];
$address =$_POST["add"];

$role=$_POST["role"];


$insert = mysqli_query($connect,"INSERT INTO user(voterid,password,address,citizenship photo,votercard photo,role,status,votes	) VALUES(`$name`,`$password`,`$address`,`$role`,0,0)" );
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
    





?>