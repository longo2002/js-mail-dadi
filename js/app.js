console.log ("woks!")

let bottone = document.getElementById("bottone");
let refresh = document.getElementById("refresh");
let signUp = document.getElementById("register");
const emailListEl = ["wovedo1995@breazeim.com", "l1af@starux.de", "shahabjavaheri@tijdelijke.email"]

signUp.addEventListener ( "click",
    function myFunction() {
        
        let emailUser = prompt("Qual'è la tua mail?")
        console.log("Ciao,", emailUser)    
        console.log("Premi START per giocare")
        emailListEl.push(emailUser);
        console.log(emailListEl)
    
    }

)


bottone.addEventListener ( "click",

    function myFunction() {
            
        let dadoComputer = Math.floor(Math.random() * 6) + 1; ;

        console.log(dadoComputer)

        let dadoUser = Math.floor(Math.random() * 6) + 1; ;

        console.log(dadoUser)

        if (dadoComputer < dadoUser){
            console.log("Hai perso mi spiace :(")
        } else if (dadoComputer > dadoUser) {
            console.log("Bravo hai vinto! :)")
        } else if (dadoComputer = dadoUser){
            console.log("Pareggio,meglio di niente:/")
        }

    }

)

refresh.addEventListener ( "click",
    function refreshFunction() {
        window.location.reload(true)
    }
)


