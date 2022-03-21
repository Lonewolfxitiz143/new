function login(){
    let uname =document.getElementById("uname");
    let flag=1;
    if(uname.value==""){
    document.getElementById("v").innerHTML="voter id required";
    flag=0;
    
    }
    else{
    document.getElementById("v").innerHTML="";
    flag=1;
    }
    if(flag){
    return true;}
    else{
    
    return false;
    }
    }
    