const reset = () => {
    document.getElementById(form).reset();
}

function EnableDisableTextBox() {
    var chkYes = document.getElementById("married");
    var inputbox = document.getElementById("namespouse");
    inputbox.disabled = chkYes.checked ? false : true;
    if (!inputbox.disabled) {
        inputbox.focus();
    }
}

const validateForm = () => {
    let firstname = document.forms["form"]["fname"].value;
    let lastname = document.forms["form"]["lname"].value;
    let gender = document.forms["form"]["gender"].value;
    let status = document.forms["form"]["status"].value;
    let spouse = document.forms["form"]["spouse"].value;
    let details = document.forms["form"]["details"].value;
    let tnc = document.forms["form"]["tnc"].value;

    for(let i=0; i<firstname.length; i++) {
        if(firstname[i]===" ") {
            document.getElementById("textend").innerHTML = "First Name contains white space!!";
            break;
        }
    }

    for(let i=0; i<lastname.length; i++) {
        if(lastname[i]===" ") {
            document.getElementById("textend").innerHTML = "Last Name contains white space!!";
            break;
        }
    }

    for(let i=0; i<spouse.length; i++) {
        if(spouse[i]===" ") {
            document.getElementById("textend").innerHTML = "Spouse Name contains white space!!";
            break;
        }
    }
    

    if(firstname==="") {
        alert("Please enter First Name");
        document.getElementById("fname").focus();
    }
    else if(lastname==="") {
        alert("Please enter Last Name");
        document.getElementById("lname").focus();
    }
    else if(gender==="") {
        alert("Please enter Gender");
        document.getElementById("gender").focus();
    }
    else if(status==="") {
        alert("Please enter Marital Status");
        document.getElementById("status").focus();
    }
    else if(spouse==="" && status==="single") {
        alert("Please enter Spouse Name");
        document.getElementById("spouse").focus();
    }
    else if(details==="") {
        alert("Please enter Other Details");
        document.getElementById("details").focus();
    }
    else if(tnc===false) {
        alert("Please tick on Terms and Conditions");
        document.getElementById("tnc").focus();
    }
    else {
        document.getElementById("textend").innerHTML = "Thank You!!"
    }
    return false;
}