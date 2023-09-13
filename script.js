let userChoice = prompt(('Escolha rock, paper ou scissor')).toLowerCase(    )

let userChoice1 = 'rock'
const userChoice2 = 'paper'
const userChoice3 = 'scissors'

const computerChoice1 = 'rock'
const computerChoice2 = 'paper'
const computerChoice3 = 'scissors'

function game(computerAnswer, userChoice1, userChoice2, userChoice3) {

    switch(computerAnswer, userChoice1, userChoice1, userChoice3) {
            case userChoice1:
                    if(userChoice === 'rock') {
                        console.log('Woops, i won' + ' ' + computerChoice2)
                    }
            case userChoice2: 
                if(userChoice === 'paper') {
                    console.log('Woops, i won' + ' '  + computerChoice3)
                }
            case userChoice3: 
                if(userChoice === 'scissors'){
                    console.log('Woops, i won' + ' ' + computerChoice1)
                }
        }   
    }
 game()


