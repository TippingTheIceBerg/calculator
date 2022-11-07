// we want to get a value which will be num1 when we click on an input
// next, when we click on any of the arithmetic inputs, store the num1 value away, and then store the arithmetic value away
// when clicking on the new number, we want to now store that as num2
// after num2 is created, the arithmetic should now be applied and shows on the answer section
// the answer should now be used as num1 unless cleared.
// if cleared, the num1 should now be reset to 0.


let input = document.querySelectorAll("input");
let num1;
input.forEach(e=>{
   e.addEventListener("click",()=>{
num1 = e.value
console.log(num1)
   })
})

console.log(num1)