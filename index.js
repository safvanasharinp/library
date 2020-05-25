let email=document.getElementById("email");
let emaillg=document.getElementById("emaillg");
let error=document.getElementById("error");
let password1=document.getElementById("pass1");
let password2=document.getElementById("pass2");
let passwordlg=document.getElementById("passlg");

let phone=document.getElementById("phone");
let phonelg=document.getElementById("phonelg");

//let emailmsg=document.getElementById("emailmsg");


let regexpemail=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
let regexpphone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let regexppass=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
//let regexppass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$/;
//let regexppass=/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
//password must satisfy following......
// This regular expression match can be used for validating strong password. It expects atleast 1 small-case letter, 1 Capital letter, 1 digit, 1 special character and the length should be between 6-10 characters. The sequence of the characters is not important. This expression follows the above 4 norms specified by microsoft for a strong password.


// At least one digit [0-9]
// At least one lowercase character [a-z]
// At least one uppercase character [A-Z]
// At least 8 characters in length, but no more than 32.


// let strength=document.getElementById("strength");
// let show=document.getElementById("show");
// let msg=document.getElementById("msg");


function validate1(){
    if(regexpemail.test(email.value))
{
   // alert("email valid");
   document.getElementById("emailmsg").innerText="email valid";

    
}
else{
    document.getElementById("emailmsg").innerText="email invalid";
    //alert("email invalid");
    return false;
    
}
if(regexpphone.test(phone.value))
{
    //alert("phone valid");
    document.getElementById("phonemsg").innerText="phone valid";
    
}
else{
    document.getElementById("phonemsg").innerText="phone invalid";
    //alert("phone invalid");
   return false;
}
if(regexppass.test(password1.value))
{
    if((password1.value)==(password2.value)){
        document.getElementById("pass2msg").innerText="password valid and passwords are same";
        if(password1.value.length>10){
            document.getElementById("pass1msg").innerText="Excellent password";
            document.getElementById("pass1msg").style.color="green";
        }
             else if(password1.value.length<=8){
                document.getElementById("pass1msg").innerText="Weak password";
                document.getElementById("pass1msg").style.color="red";
            }
            else{
                document.getElementById("pass1msg").innerText="Medium password";
                document.getElementById("pass1msg").style.color="blue";
            }
        
            //alert("password valid");
            return true;
    }
            
    
    else{
        document.getElementById("pass2msg").innerText="passwords are not same";
        document.getElementById("pass2msg").style.color="red";
       // alert("passwords are not same");
    }
    
}
else{

    if(password1.value.length<=8){
        document.getElementById("pass1msg").innerText="Weak password";
        document.getElementById("pass1msg").style.color="red";
    
    document.getElementById("pass2msg").innerText="password invalid";
   // document.getElementById("pass2msg").style.color="red";
    //alert("password invalid");
    return false;
    }
}
}


function validate2(){
    if(regexpemail.test(emaillg.value))
{
    document.getElementById("emaillgmsg").innerText="email valid";
    document.getElementById("emaillgmsg").style.color="red";
   // alert("email valid");
    
}
else{
    document.getElementById("emaillgmsg").innerText="email invalid";
    document.getElementById("emaillgmsg").style.color="red";
   // alert("email invalid");
    return false;
    
}
if(regexpphone.test(phonelg.value))
{
    document.getElementById("phonelgmsg").innerText="phone valid";
    document.getElementById("phonelgmsg").style.color="red";
    //alert("phone valid");
    
    
}
else{
    document.getElementById("phonelgmsg").innerText="phone invalid";
    document.getElementById("phonelgmsg").style.color="red";
   // alert("phone invalid");
   return false;
}
if(regexppass.test(passwordlg.value))
{
    document.getElementById("passlgmsg").innerText="password valid";
    document.getElementById("passlgmsg").style.color="red";
           // alert("password valid");
            return true;
    
            
    
    
    
}
else{
    document.getElementById("passlgmsg").innerText="password invalid";
    document.getElementById("passlgmsg").style.color="red";
   // alert("password invalid");
    return false;
}
}
