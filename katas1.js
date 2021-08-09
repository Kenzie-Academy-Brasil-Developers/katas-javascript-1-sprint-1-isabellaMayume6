function showResults(resultado){
  let elemento = document.createElement("div")
  let texto = document.createTextNode(resultado)
  elemento.appendChild(texto)
  document.body.appendChild(elemento)
}

function oneThroughTwenty() {
let result = []    
for( let count = 1;count <= 20;count++){
  result.push(count)
}
  return showResults(result)    
}oneThroughTwenty()

function evensToTwenty() {
  let result = []
  for(let count=1;count<= 20;count++){
    if(count%2===0){
      result.push(count)
    }
  }return showResults(result)    
}evensToTwenty()

function oddsToTwenty() {
  let result = [] 
  for(let count= 1; count<20;count++){
    if(count%2!==0){
      result.push(count)
    }
  }return showResults(result)    
}oddsToTwenty()

function multiplesOfFive() {
 let result = []
 for(let count=5;count<=100;count++){
   if (count%5===0){
     result.push(count)
  }
 }return showResults(result)    
}multiplesOfFive()


function squareNumbers() {
  let result = []
  for(let count=0;count<=10;count++){
    let multipli = count * count
    result.push(multipli)
  }return showResults(result)    
}squareNumbers()

function countingBackwards() {
  let result = []
  for(let count =20;count>0;count--){
    result.push(count)
  }return showResults(result)    
}countingBackwards()

function evenNumbersBackwards() {
  let result = []
  for(let count = 20;count>1;count--){
    if(count%2==0){
    result.push(count)}
  }return showResults(result)    
}evenNumbersBackwards()

function oddNumbersBackwards() {
  let result=[]
  for(let count=20;count>1;count--){
    if(count%2!==0){
    result.push(count)}
  }return showResults(result)    
}oddNumbersBackwards()

function multiplesOfFiveBackwards() {
  let result = []
  for(let count = 100;count>5;count--){
    if(count%5===0){
      result.push(count)
    }
  }return showResults(result)    
}multiplesOfFiveBackwards()

function squareNumbersBackwards() {
  let result = []
  for(let count=10;count>0;count--){
    let multipli = count * count
    result.push(multipli)
  }return showResults(result)    
}squareNumbersBackwards()
