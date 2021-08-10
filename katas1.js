function oneThroughTwenty() {
let result = []    
for( let count = 1;count <= 20;count++){
  result.push(count)
}return result    
}console.log(oneThroughTwenty())

function evensToTwenty() {
  let result = []
  for(let count=1;count<= 20;count++){
    if(count%2===0){
      result.push(count)
    }
  }return result    
}console.log(evensToTwenty())

function oddsToTwenty() {
  let result = [] 
  for(let count= 1; count<20;count++){
    if(count%2!==0){
      result.push(count)
    }
  }return result
}console.log(oddsToTwenty())

function multiplesOfFive() {
 let result = []
 for(let count=5;count<=100;count++){
   if (count%5===0){
     result.push(count)
  }
 }return result    
}console.log(multiplesOfFive())


function squareNumbers() {
  let result = []
  for(let count=0;count<=10;count++){
    let multipli = count * count
    result.push(multipli)
  }return result   
}console.log(squareNumbers())

function countingBackwards() {
  let result = []
  for(let count =20;count>0;count--){
    result.push(count)
  }return result   
}console.log(countingBackwards())

function evenNumbersBackwards() {
  let result = []
  for(let count = 20;count>1;count--){
    if(count%2==0){
    result.push(count)}
  }return result   
}console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
  let result=[]
  for(let count=20;count>1;count--){
    if(count%2!==0){
    result.push(count)}
  }return result    
}console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let result = []
  for(let count = 100;count>5;count--){
    if(count%5===0){
      result.push(count)
    }
  }return result    
}console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
  let result = []
  for(let count=10;count>0;count--){
    let multipli = count * count
    result.push(multipli)
  }return result    
}console.log(squareNumbersBackwards())
