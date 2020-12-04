//form element events
document.getElementById("firstName").addEventListener("blur",function(){
    if(this.value !== ""){
        validatingFirstName.innerHTML="";
    }
});
document.getElementById("lastName").addEventListener("blur",function(){
    if(this.value !== ""){
        validatingLastName.innerHTML="";
    }
});
document.getElementById("emailAddress").addEventListener("blur",function(){
    if(this.value !== ""){
        validatingEmailAddress.innerHTML=""; 
    }
});
document.getElementById("address").addEventListener("blur",function(){
    if(this.value !== ""){
        validatingAddress.innerHTML=""; 
    }
});
document.getElementById("city").addEventListener("blur",function(){
    if(this.value !== ""){
        validatingCity.innerHTML="";
    }
});
document.getElementById("province").addEventListener("click",function(){
    if(this.value !== ""){
        validatingProvince.innerHTML="";
    }
});
document.getElementById("country").addEventListener("click",function(){
    if(this.value !== ""){
        validatingCountry.innerHTML="";
    }
});

document.profileForm.addEventListener("submit", validateProfile.validate);
