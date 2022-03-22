<?php

$connect= mysqli_connect("localhost","root","","e-voting") or die("connection failed");
if($connect){
    echo "connected!";
}
else{
echo "not connected";

}

?>