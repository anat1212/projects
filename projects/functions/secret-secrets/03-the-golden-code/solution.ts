type scripter = {
    attempts: number,
    makeGuess:  (text: string, attempt: number) => string,
    validateGuess: (guess: string) => boolean,
}


function createCodeCracker(myObject: scripter) {
    return (text: string) => {
        for (let j = 1; j<= myObject.attempts; j++) {
            let attempt = myObject.makeGuess(text, j)
            let answer = myObject.validateGuess(attempt)
            if (answer == true) {
                return true
            }
        }
        return undefined
    }
    
}
