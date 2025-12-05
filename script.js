let userscore = 0;
let compscore = 0;

user = document.querySelector('#user-score');
computer = document.querySelector('#comp-score');
message = document.querySelector('#msg');


const choices = document.querySelectorAll('.choice');

const gencomputerchoice = function () {
    let options = ['rock', 'paper', 'scissors'];
    const randomidex = Math.floor(Math.random() * 3);
    return options[randomidex]
}

const playgame = function (userchoice) {
    console.log("user choice =", userchoice)
    const compchoice = gencomputerchoice();
    console.log("computer choice =", compchoice);

    if (userchoice === compchoice) {
        msg.innerText = "Draw Game! play Again";
        msg.style.backgroundColor = 'blue';
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === 'paper' ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === 'scissors' ? false : true;
        }
        else if (userchoice === "scissors") {
            userwin = compchoice === 'rock' ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);

    }
}

const showwinner = function showwinner(userwin, userchoice, compchoice) {
    if (userwin) {
        userscore++;
        user.innerText=userscore;
        message.innerText = `you win ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor = 'green';
    }
    else {
        compscore++;
        computer.innerText=compscore;
        message.innerText = `you lost ${compchoice} beats ${userchoice}`;
        message.style.backgroundColor = 'Red';
    }
};

choices.forEach(function (choice) {
    choice.addEventListener('click', function () {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
