const buttons = document.querySelectorAll(".buttons") ;
const verdict = document.querySelector("#resultHere") ;
const result = document.querySelector(".result") ;
const table = document.querySelector(".scoreBox") ;
const val2 = document.querySelector("#val2") ;
const val1 =document.querySelector("#val1") ;
const resetButton = document.querySelector("#reset") ;
let value2 = 0 ;
let value1 = 0 ;

let userChoice = "" ;


let genCompChoice = () => {
    const options = ["stone" , "paper" , "scissor"]
    let idx = Math.floor(Math.random() * 3) ;
    return options[idx] ;

} 

let compChoice = genCompChoice() ;

const reset = () => {
    resetButton.addEventListener("click", () => {
        value1 = 0 ;
        value2 = 0 ;
        result.classList.add("hide")  ;
        table.classList.add("hide") ;
        val1.innerText = value1 ;
        val2.innerText = value2 ;
    } ) ;
}

const gameDraw = () => {
    result.classList.remove("hide")  ;
    verdict.innerText = `GAME DRAW !!` ;
    result.style.backgroundColor =  "#f4d03f";   
     table.classList.remove("hide") ;
}

const lost = () => {
    result.classList.remove("hide")  ;
    table.classList.remove("hide") ;
    verdict.innerText = `YOU LOST !! ${compChoice} beats ${userChoice}` ;
    result.style.backgroundColor =  "red";
    value2++ ;
    val2.innerText = `${value2}`;
}

const win = () => {
    result.classList.remove("hide")  ;
    table.classList.remove("hide") ;
    verdict.innerText = `YOU WON !! ${userChoice} beats ${compChoice} `;
    result.style.backgroundColor =  "#3bc822ff";  
    value1++ ;
    val1.innerText = `${value1}`
}


const gamePlay = (userChoice) => {
    console.log("user selcted : " , userChoice) ;
    compChoice = genCompChoice() ; 
    console.log("computerChoice : " , compChoice) ;

    if(compChoice === userChoice){
        gameDraw() ;
    }
    else{
        let userWin = true ;
        if (userChoice === "paper" && compChoice === "scissor"){
            userWin = false ;
            lost() ;
        }
        else if(userChoice === "paper" && compChoice === "stone"){
            userWin = true ;
            win() ;
        }
        else if(userChoice === "stone" && compChoice === "scissor"){
            userWin = true ;
             win() ;
        }
        else if(userChoice === "stone" && compChoice === "paper"){
            userWin = false ;
            lost() ;
        }
        else if(userChoice === "scissor" && compChoice === "stone"){
            userWin = false ;
            lost() ;
        }
        else if(userChoice === "scissor" && compChoice === "paper"){
            userWin = true ;
             win() ;
        }
    }

    
    
}


buttons.forEach((buttons) => {
    
    buttons.addEventListener("click" ,() => {
        userChoice = buttons.getAttribute("id") ;
        gamePlay(userChoice) ;
    })
});

reset() ;