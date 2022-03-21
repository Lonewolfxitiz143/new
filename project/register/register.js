function validate() {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let gender = document.form.gender;
    flag = 1;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
            return true;
        }
        else {
            document.getElementById("m").innerHTML = "*please select your gender"
            return false;
        }

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

    else if(pass.value.length<=7){
        document.getElementById("p").innerHTML="*password must contain at least 8 character";
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