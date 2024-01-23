
document.addEventListener("submit" , (ev)=>{
    ev.preventDefault();
    
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    console.log(fullname);

    document.getElementById("fullname-dis").innerHTML = fullname;
    document.getElementById("email-dis").innerHTML = email;
    document.getElementById("mobile-dis").innerHTML = mobile;
})