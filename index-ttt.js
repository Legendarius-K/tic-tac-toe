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





const smileySound = new Audio("./sound/smiley.mp3");
smileySound.load();
const skullSound = new Audio("./sound/skull.mp3");
skullSound.load();
const crowdSound = new Audio("./sound/crowd.mp3");
crowdSound.load();

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
let player1Score = document.querySelector(".smiley-score");
let player2Score = document.querySelector(".skull-score");
let result = document.querySelector(".result");
let newRound = document.querySelector(".new-round");
let smileyTurn = document.querySelector(".smiley-turn");
let skullTurn = document.querySelector(".skull-turn");

let player1Start = true;
let player1Round = true;

if (player1Start === true) {
    player1Round = true;
    smileyTurn.classList.add("turn-active"); 
} else {
    player1Round = false; 
}

let displayConfetti = true;

const confettiRain = () => {
    if (!displayConfetti) {
        return;  
    } else {
        for(i=0; i<100; i++) {

            var randomRotation = Math.floor(Math.random() * 360);
            var randomScale = Math.random() * 1;
            var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
            var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
            
            var randomAnimationDelay = Math.floor(Math.random() * 15);
                
            var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
        
            var confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.top=randomHeight + 'px';
            confetti.style.right=randomWidth + 'px';
            confetti.style.backgroundColor=randomColor;
            confetti.style.obacity=randomScale;
            confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
            confetti.style.animationDelay=randomAnimationDelay + 's';
            document.getElementById("confetti-wrapper").appendChild(confetti);
        }
    }
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
    player1Round = player1Start; 
    displayConfetti = false;

    const confettiWrapper = document.getElementById("confetti-wrapper");
    while (confettiWrapper.firstChild) {
        confettiWrapper.removeChild(confettiWrapper.firstChild);
    }   
    if (player1Round === true) {
        smileyTurn.classList.add("turn-active");
        skullTurn.classList.remove("turn-active");
    } else {
        skullTurn.classList.add("turn-active");
        smileyTurn.classList.remove("turn-active");
    }
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

    const winConditions = [
      [a1, a2, a3],
      [b1, b2, b3],
      [c1, c2, c3],
      [a1, b1, c1],
      [a2, b2, c2],
      [a3, b3, c3],
      [a1, b2, c3],
      [a3, b2, c1],
    ];
  
    for (const condition of winConditions) {
        if (condition.every(box => box.classList.contains(symbol))) {      
            result.textContent = `${symbol} wins!`.toUpperCase();
            crowdSound.play();
            displayConfetti = true;
            confettiRain();
        }
    }   
    callback()
    callback2();   
} 

const smileyClick = (e, box) => {
    smileySound.play();
    e.target.classList.add("smiley")
    e.target.classList.remove("click")
    box.disabled = true;
    checkWinner("smiley", counter, disableButtons);
    const boxes = Array.from(document.querySelectorAll(".click"));
    player1Round = false;
    skullTurn.classList.add("turn-active");
    smileyTurn.classList.remove("turn-active");
}

const skullClick = (e, box) => {
    skullSound.play();
    e.target.classList.add("skull")
    e.target.classList.remove("click")
    box.disabled = true;
    checkWinner("skull", counter, disableButtons);
    const boxes = Array.from(document.querySelectorAll(".click"));
    player1Round = true;
    smileyTurn.classList.add("turn-active");
    skullTurn.classList.remove("turn-active");
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









