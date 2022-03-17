//Description:
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?



function makeNegative(num) {
  if(-num < 0) {
    return -num
  } else return num
}

console.log(makeNegative(5))

// ahora en 
function negativeto(num) {
  return num > 0 ? -num : num;
}

console.log(negativeto(9))