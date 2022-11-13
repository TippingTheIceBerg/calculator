// we want to get a value which will be num1 when we click on an input
//    a. When we click on more numbers, they should be tagged along

// When we click on any of the arithmetic inputs, store the num1 value away, and then store the arithmetic value away
// when clicking on the new number, we want to now store that as num2
// after num2 is created, the arithmetic should now be applied and shows on the answer section
// the answer should now be used as num1 unless cleared.
// if cleared, the num1 should now be reset to 0.


let userInput = document.querySelector(".calc__input");
let answerStorage = document.querySelector(".answer__store");
let result = document.querySelector(".calc__result");
let userEval;

let numbers = document.querySelectorAll(".calc__number");
let num1;




// show num1 when clicked
numbers.forEach(number=>{
   number.addEventListener("click",()=>{
      if(answerStorage.textContent == ""){
         num1 = number.value;
         if(userInput.textContent == 0){
            userInput.textContent = num1;
         }
         else if(userInput.textContent != 0){
            userInput.textContent+=num1;
         }
      }
      if(answerStorage.textContent != ""){
         storeSecondNumber(number.value);
      }
      
   })
   
})
// shows num2

let num2;
function storeSecondNumber(number){
    num2 = number;
   if(userInput.textContent == 0){
      userInput.textContent = num2;
   }
   else if(userInput.textContent != 0){
      userInput.textContent+=num2;
   }
    num2 = userInput.textContent;
}

let art = document.querySelectorAll(".calc__art");
// shows num1 and arithmetic 
art.forEach(e => {
   e.addEventListener('click',()=>{
      num1 = userInput.textContent;
      answerStorage.textContent = userInput.textContent + e.value;
      userInput.textContent = 0;
      userEval = e.value;
   })
})



// calculates value
let myAnswer;
result.addEventListener("click",()=>{
if(userEval = "*"){
   setMultiply(num1,num2)
  
}
userInput.textContent = myAnswer;
num1 = myAnswer;
answerStorage.textContent = ""
})

function setAdd(num1,num2){
  myAnswer = num1+num2;
};
function setSub(num1,num2){
   myAnswer = num1-num2;
};
function setDivide(num1,num2){
   myAnswer = num1/num2;
};
function setMultiply(num1,num2){
   myAnswer = num1*num2

};


// clear values

let clear = document.querySelector(".calc__clear");
clear.addEventListener('click',()=>{
   userInput.textContent = 0;
   answerStorage.textContent = ""
   num1 = 0;
   num2 = 0;
})