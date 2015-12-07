confirm("Are you ready to play?")

var age = prompt("How old are you?")

if(age < 13) {
    console.log("You are too young. Come back when you are 13.")}
else {
    console.log("Get ready to play and have fun.")}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")

var userAnswer = prompt("Do you want to race Bieber on stage?")

if(userAnswer === "yes") {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")}
else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'") }
    
var feedback = prompt("Please rate my game out of 10, 10 being super awesome.")

if(feedback > 8) {
    console.log("Thank you! We should race at the next concert!")} 
else {
    console.log("Thank you! I will keep practicing coding and racing.")}
