/*
1. Human starts 
2. When clicking a box it gets the "circle" class
3. Computer then clicks random box and adds "cross" class (randomize through an array of boxes)
4. ??? When box gets filled. Set "cross"/"circle" and "tie" to "true". ???
5. Write logic: If circle true gets 3 in a row human wins,and vice versa
6. If "tie" gets to 9 it's a tie and the game starts over.

add music and sound fx
different color themes
2 players?

*/



// const computerMove = () => {
//     boxes = Array.from(document.querySelectorAll(".click"));
//     let computerChoice = boxes[Math.floor(Math.random() * boxes.length)];
//     computerChoice.classList.add("cross");
//     computerChoice.classList.remove("click");
//     clicked = true;
// }

// boxes.forEach(box => {

//     box.addEventListener("click", e => {
//         clicked = false;
//         let computerChoice = boxes[Math.floor(Math.random() * boxes.length)];
//         computerChoice.classList.add("cross");
//         computerChoice.classList.remove("click");
//         clicked = true;
//         ticCounter++;

//         if (clicked === true) {
//             e.target.classList.add("circle");
//             e.target.classList.remove("click");      
//             ticCounter++;  
//             console.log(boxes);  
//             boxes = Array.from(document.querySelectorAll(".click"));  
//         }      
//     })
// })

// while (clicked === false) {
   

    // if (clicked) {
            
            
    // }
        // if (Array.from(box.classList).includes("circle")) {
        //     clicked = false;
        // }
    
// }

// if (a1.classList.contains("circle") && a2.classList.contains("circle") && a3.classList.contains("circle")) {
        //    result.textContent = "Human wins!";
        // } else if (b1.classList.contains("circle") && b2.classList.contains("circle") && b3.classList.contains("circle")) {
        //     result.textContent = "Human wins!";
        // } else if (c1.classList.contains("circle") && c2.classList.contains("circle") && c3.classList.contains("circle")) {
        //     result.textContent = "Human wins!";
        // } else if (a1.classList.contains("circle") && b1.classList.contains("circle") && c1.classList.contains("circle")) {
        //     result.textContent = "Human wins!";
        // } else if (a2.classList.contains("circle") && b2.classList.contains("circle") && c2.classList.contains("circle")) {
        //     result.textContent = "Human wins!";
        // } else if (a3.classList.contains("circle") && b3.classList.contains("circle") && c3.classList.contains("circle")) {
        //     result.textContent = "Human wins!";
        // } else if (a1.classList.contains("circle") && b2.classList.contains("circle") && c3.classList.contains("circle")) {
        //     result.textContent = "Human wins!";
        // } else if (a3.classList.contains("circle") && b2.classList.contains("circle") && c1.classList.contains("circle")) {
        //     result.textContent = "Human wins!";
        // } else if (a1.classList.contains("cross") && a2.classList.contains("cross") && a3.classList.contains("cross")) {
        //     result.textContent = "Computer wins!";
        // } else if (b1.classList.contains("cross") && b2.classList.contains("cross") && b3.classList.contains("cross")) {
        //     result.textContent = "Computer wins!";
        // } else if (c1.classList.contains("cross") && c2.classList.contains("cross") && c3.classList.contains("cross")) {
        //     result.textContent = "Computer wins!";
        // } else if (a1.classList.contains("cross") && b1.classList.contains("cross") && c1.classList.contains("cross")) {
        //     result.textContent = "Computer wins!";
        // } else if (a2.classList.contains("cross") && b2.classList.contains("cross") && c2.classList.contains("cross")) {
        //     result.textContent = "Computer wins!";
        // } else if (a3.classList.contains("cross") && b3.classList.contains("cross") && c3.classList.contains("cross")) {
        //     result.textContent = "Computer wins!";
        // } else if (a1.classList.contains("cross") && b2.classList.contains("cross") && c3.classList.contains("cross")) {
        //     result.textContent = "Computer wins!";
        // } else if (a3.classList.contains("cross") && b2.classList.contains("cross") && c1.classList.contains("cross")) {
        //     result.textContent = "Computer wins!";
        // } 







let boxes = Array.from(document.querySelectorAll(".click"));

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");



let player1Count = 0;
let player2Count = 0;
let player1Score = document.querySelector(".player-1-score");
let player2Score = document.querySelector(".player-2-score");

let result = document.querySelector(".result");
let newRound = document.querySelector(".new-round");

let player1Start = true;
let player1Round = true;

if (player1Start === true) {
    player1Round = true;
} else {
    player1Round = false;
}


const resetBoard = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.classList.remove("smiley");
        box.classList.remove("skull");
        box.classList.add("click");
        
    })    
    result.textContent = "";
    player1Start = !player1Start;
}


const disableButtons = () => {
    if (result.textContent.includes("WINS!")) {
        boxes.forEach(box => {
            box.disabled = true;
        })
    }
}

let counter = () => {
    if (result.textContent.includes("SMILEY WINS!")) {
        player1Count++;
        player1Score.textContent = player1Count;
    } else if (result.textContent.includes("SKULL WINS!")) {
        player2Count++;
        player2Score.textContent = player2Count;
    }
    
}

const checkWinner = (symbol, callback, callback2) => {
    if (a1.classList.contains(symbol) && a2.classList.contains(symbol) && a3.classList.contains(symbol)) {
        result.textContent = `${symbol} wins!`.toUpperCase();
    } else if (b1.classList.contains(symbol) && b2.classList.contains(symbol) && b3.classList.contains(symbol)) {
        result.textContent = `${symbol} wins!`.toUpperCase();
    } else if (c1.classList.contains(symbol) && c2.classList.contains(symbol) && c3.classList.contains(symbol)) {
        result.textContent = `${symbol} wins!`.toUpperCase();
    } else if (a1.classList.contains(symbol) && b1.classList.contains(symbol) && c1.classList.contains(symbol)) {
        result.textContent = `${symbol} wins!`.toUpperCase();
    } else if (a2.classList.contains(symbol) && b2.classList.contains(symbol) && c2.classList.contains(symbol)) {
        result.textContent = `${symbol} wins!`.toUpperCase();
    } else if (a3.classList.contains(symbol) && b3.classList.contains(symbol) && c3.classList.contains(symbol)) {
        result.textContent = `${symbol} wins!`.toUpperCase();
    } else if (a1.classList.contains(symbol) && b2.classList.contains(symbol) && c3.classList.contains(symbol)) {
        result.textContent = `${symbol} wins!`.toUpperCase();
    } else if (a3.classList.contains(symbol) && b2.classList.contains(symbol) && c1.classList.contains(symbol)) {
        result.textContent = `${symbol} wins!`.toUpperCase();
    } else {
        // result.textContent = "It's a TIE!";
    }

    
    

    callback()
    callback2();
    

} 



const smileyClick = (e, box) => {
    e.target.classList.add("smiley")
    e.target.classList.remove("click")
    box.disabled = true;
    checkWinner("smiley", counter, disableButtons);
    const boxes = Array.from(document.querySelectorAll(".click"));
    player1Round = false;
}

const skullClick = (e, box) => {
    e.target.classList.add("skull")
    e.target.classList.remove("click")
    box.disabled = true;
    checkWinner("skull", counter, disableButtons);
    const boxes = Array.from(document.querySelectorAll(".click"));
    player1Round = true;
}



boxes.forEach(box => {

    box.addEventListener("click", e => {
        if (player1Round === true) {
            smileyClick(e, box);
        } else if (player1Round === false) {
            skullClick(e, box); 
        }  
    })
})

newRound.addEventListener("click", resetBoard)











