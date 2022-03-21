function login(){
let user=document.getElementById("user");
let pass = document.getElementById("pass");
flag = 1;

if(user.value==""){
document.getElementById("u").innerHTML="*user id required";
flag=0;
}
else{
document.getElementById("u").innerHTML="";
flag=1;
}

if(pass.value==""){
    document.getElementById("p").innerHTML="*user password required";
    flag=0;
    }
    else{
    document.getElementById("p").innerHTML="";
    flag=1;

}
if(flag){
    return true;
}
else{
    return false;
}


}