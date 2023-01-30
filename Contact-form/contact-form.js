function validateForm(){
         testName();
         testEmail();
         testEmailConfirm();
         testPhone();
         testAddress();
}
                    // Name Validation
function testName(){
    let varName = document.getElementById("Name").value;
    
    if(varName == ""){
        document.getElementById("nameError").innerHTML = "write a name";
        return false;
    }else{

        document.getElementById("nameError").innerHTML = "good to go";
        return true;
    }
}
                    // Phone number Validation
function testPhone(){
    let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let varPhone = document.getElementById("Phone").value;
    if(varPhone == ""){
        document.getElementById("phoneError").innerHTML = "invalid phone number";
        return false;
    }else{

        document.getElementById("phoneError").innerHTML = "good to go";
        return true;
    }
}
                    // Email Validation
function testEmail(){
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("Email").value;
    if(emailRegex.test(email)){
        document.getElementById("emailError").innerHTML = "valid email";
        return true;
    }else{
        document.getElementById("emailError").innerHTML = "invalid email";
        return false;
    }
}
                    // Email Confirmation
function testEmailConfirm(){
    let EmailConfirm = document.getElementById("EmailConfirm").value;
    let email = document.getElementById("Email").value;
    if(EmailConfirm !="" && EmailConfirm  == email){
        document.getElementById("EmailConfirmError").innerHTML = "valid email";
        return true;
    }else{
        document.getElementById("EmailConfirmError").innerHTML = "invalid email";
        return false;
    }
}
// Address Validation  Ο τύπος διεύθυνσης που δέχεται είναι "88 Journal Square Jersey City, NJ 07306"
function testAddress(){
    let addressRegex = /(\d{1,}) [a-zA-Z0-9\s]+(\.)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}/;
    let address = document.getElementById("Address").value;
    if(addressRegex.test(address)){
        document.getElementById("addressError").innerHTML = "good to go";
        return true;
    }else{
        document.getElementById("addressError").innerHTML = "invalid adress";
        return false;
    }
}