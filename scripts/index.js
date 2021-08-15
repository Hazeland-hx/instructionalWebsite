// Grab the body element from HTML
var body = document.querySelector("body");
//Declaration for the class child
class question {
  // A constructor is a special function used to create an instance of the class
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    // We will set this to true when answered correctly.
    this.correct = false;
  }
}

// Declare a new array
let myFlashcards = [];

// Create three questions and push them onto the myFlashcards array
myFlashcards.push(new question('What is 3+5?', '8'));
myFlashcards.push(new question('What color is the sky?', 'blue'));
myFlashcards.push(new question('Is ice cold?', 'yes'));

// Loop through the array printing out the question and the answer
let i = 0;
while (i < myFlashcards.length)  {
  console.log(myFlashcards[i].question + ' ' + myFlashcards[i].answer);
    i=i+1;
}

// Wait for the user to click the question
i=0;
body.addEventListener("click", changeQuestion);
function changeQuestion() {
  // change the question and display the answer
  document.getElementById("q1").innerHTML = myFlashcards[i].question;
  document.getElementById("a1").innerHTML = myFlashcards[i].answer;
  if(i < myFlashcards.length-1){
    i=i+1;
  }else{
    i=0
  }
}
