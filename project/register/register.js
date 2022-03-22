function validate() {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    
    let btn = document.getElementById.onclick=
        function(){
            window.location="../login/login.html";
        }

    let x=document.form.gender;
    for(i=0; i<x.length;i++)
        if(x[i].checked==true){
            flag=1;
        }
        else{
            document.getElementById("m").innerHTML="*Please select your gender";
            flag=0;
        }
    
    
    if (user.value == "") {
        document.getElementById("u").innerHTML = "*user id required";
        flag = 0;
    }
    else {
        document.getElementById("u").innerHTML = "";
        flag = 1;
    }
    if (pass.value == "") {
        document.getElementById("p").innerHTML = "*password required";
        flag = 0;
    }
    else if(pass.value.length<=7)
    {
        document.getElementById("p").innerHTML="*password length must be 8 or above";
        flag=0;


    }
    else {
        document.getElementById("p").innerHTML = "";
        flag = 1
    }

    if (flag) {
        return true;
    }
    else {
        return false;
    }


}