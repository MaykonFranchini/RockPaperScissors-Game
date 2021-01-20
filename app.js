// variable declarations

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
// criando as funcoes. 
const getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Convertendo as letras para a palavra para mostrar na tela
const convertToWord = (letter) => {
        if (letter === "r") {
            return "Rock";
        } else if (letter === "p") {
            return "Paper";
        } else {
            return "Scissors";
        }
    }
    //criando as funcoes em caso de vitoria, empate e derrota;

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallComputerWord}. You Won &#128526!!!!!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} lose to ${convertToWord(computerChoice)} ${smallComputerWord}. You Lose &#128545!!!!!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 300);

}


function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals ${convertToWord(computerChoice)} ${smallComputerWord}. It's a Draw &#128528!!!!!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow') }, 300);

}
// a funcao main capta a acao do click em alguma das opcoes e passa a opcao como parametro na funcao game(), que determina a escolha do usuario.
function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })
    paper_div.addEventListener('click', function() {
        game('p');
    })
    scissors_div.addEventListener('click', function() {
        game('s');
    })
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "sr":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice, computerChoice);
            break;
        default:
            return "Error!!";
            break;
    }
}

// chamando a funcao main() que da inicio ao jogo captando a escolha do usuario e passando ela como parametro na funcao game() que gera tbm a escolha do computador atraves da funcao getComputerChoice().
main();