<?php
include("connect.php");
$name =$_POST['name'];
$password =$_POST['pass'];
$province =$_POST['province'];
$addr=$_POST['addr'];
$gender=$_POST['gender'];
$role=$_POST['role'];
$image=$_FILES['photo'];
$photos=$image['name'];
$fileerror=$image['error'];
$filetemp=$image['tmp_name'];


$insert = mysqli_query($connect,"INSERT INTO user(name,pass,province,role,status,votes,gender,addr,photo) VALUES('$name','$password','$province','$role',0,0,'$gender','$addr','$filetemp')" );
if($insert){
    exit();
    }
    
