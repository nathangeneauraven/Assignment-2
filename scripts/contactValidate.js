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

let fnameId = document.getElementById("firstName");
let lnameId = document.getElementById("lastName");
let emailId = document.getElementById("emailAddress");
let addressId = document.getElementById("address");
let cityId = document.getElementById("city");
let provinceId = document.getElementById("province");
let countryId = document.getElementById("country");
let fname1, lname1, email1, address1, city1, province1, country1;

function getCookies(){
    fname1 = fnameId.value;
    lname1 = lnameId.value;
    email1 = emailId.value;
    address1 = addressId.value;
    city1 = cityId.value;
    province1 = provinceId.options[provinceId.selectedIndex].text;
    country1 = countryId.options[countryId.selectedIndex].text;
    document.cookie = ["firstName="+fname1,"lastName="+lname1,"email="+email1,"address="+address1,"city="+city1,"province="+province1,"country="+country1];
}
