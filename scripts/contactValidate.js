//validate module

var validateProfile = (function(){

    //create private and public functions/objects/variables to validate the form
    return{
        validate: function(e){
            
            var valid = true;

            document.getElementById("contactReset").onclick = function(){
                validatingFirstName.innerHTML="";
                validatingLastName.innerHTML="";
                validatingEmailAddress.innerHTML=""; 
                validatingAddress.innerHTML=""; 
                validatingCity.innerHTML="";
                validatingProvince.innerHTML="";
                validatingCountry.innerHTML="";
            };

            if(profileForm.firstName.value === ""){
                document.getElementById("validatingFirstName").innerHTML="*Field is empty!*";
                valid = false;
                e.preventDefault();
            }
            if(profileForm.lastName.value === ""){
                document.getElementById("validatingLastName").innerHTML="*Field is empty!*";
                valid = false;
                e.preventDefault();
            }
            if(profileForm.emailAddress.value === ""){
                document.getElementById("validatingEmailAddress").innerHTML="*Field is empty!*";
                valid = false;
                e.preventDefault();
            }
            if(profileForm.address.value === ""){
                document.getElementById("validatingAddress").innerHTML="*Field is empty!*";
                valid = false;
                e.preventDefault();
            }
            if(profileForm.city.value === ""){
                document.getElementById("validatingCity").innerHTML="*Field is empty!*";
                valid = false;
                e.preventDefault();
            }
            if(profileForm.province.value === ""){
                document.getElementById("validatingProvince").innerHTML="*Select one of the options, please.*";
                valid = false;
                e.preventDefault();
            }
            if(profileForm.country.value === ""){
                document.getElementById("validatingCountry").innerHTML="*Select one of the options, please.*";
                valid = false;
                e.preventDefault();
            }
            if(valid){
                alert("Thank you! Submission is available on the url.");
            }
            return valid;
        }
    }
})();
