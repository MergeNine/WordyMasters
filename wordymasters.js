
const ANSWER_LENGTH = 5;


async function init() {
    let currentGuess = ""

    const WORD_API = "https://words.dev-apis.com/word-of-the-day"
    const newWord = await getNewWord(WORD_API)


    function addLetter(letter){
        if(currentGuess < ANSWER_LENGTH){
            currentGuess += letter
        }
    }

}



async function getNewWord(WORD_API) {
    const response = await fetch(WORD_API)
    const data = await response.json()
    const newWord = data.word
    return newWord.toLowerCase()
}


function isLetter(letter) {
    return /^[a-zA-Z]+$/.test(letter)
}

function setLoading(isLoading) {
    document.querySelector("img").classList.toggle("hidden", !isLoading)
}

document.addEventListener("keydown", function handleKeyPress(input) {
    const action = input.key
    if (action === "Enter"){
        checkGuess();
    } if (isLetter(action)){
        addLetter(action.toUpperCase())
    }
})

function checkGuess(){
    if (currentGuess !== ANSWER_LENGTH){
        // Do nothing
        return;
    }
}


init()

