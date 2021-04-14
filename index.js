const globalVar = 1;
 
function firstFunc () {
  const firstVar = 2;
 
  return firstVar + globalVar;
}
 
console.log(firstFunc());
