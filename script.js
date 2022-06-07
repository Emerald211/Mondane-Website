function dark() {
  $("body").toggleClass("dark") 
    $("a").toggleClass("white")
    $("h6").toggleClass("white");
    $("#bar").css("background-color" , "white")
    $("h1").toggleClass("white")

    
    
   
}

function sub() {
    const email = document.querySelector("#email").value;
    const input = document.querySelector("#submit");


    console.log(email)
    console.log(input)
    if(email === ""){
        alert("input email")

        console.log(input)
        
    } else {
        alert("congrats you have succesfully join the waitlist")
    }
}

function chat() {
    const link = "https://api.whatsapp.com/send?phone=7064158452&text=Im%20a%20Web%20developer%20and%20you%20?"

    window.open(link ,"blank") 
}


