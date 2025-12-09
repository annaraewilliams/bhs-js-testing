/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 * 
 * python -m http.server
 * 
 */

function sleep_in(weekday,vacation){
  if (!weekday||vacation){
    return !weekday || vacation;
  } else{
    return false
  }
}

function monkey_trouble(a_smile,b_smile){
  if (a_smile&&b_smile){
    return a_smile&&b_smile
}
else if (!a_smile&&!b_smile){
  return true
}
return false
}

function string_times(string, n){
  var answer = ""
  for (let i=0;i<n; i++){
    answer = answer+string
  }
  return answer
}

function front_times(string,n){
  var answer = ""
  for (let i=0;i<n; i++){
    answer = answer+string.substring(0,3)
  }
  return answer
}

function string_bits(string){
var h = string.length
var answer = ""
  for(let i=0;i<h;i=i+2) {
  answer = answer+string.substring(i,i+1)
}
return answer
}

function caughtSpeeding(speed, birthday){
if (birthday){
  var present = 5
}  
else {
  var present = 0
}
  if (speed<=60+present){
    return 0 
  }
  if (speed>=61+present&&speed<=80+present){
    return 1
  }
  else {
    return 2
  }
}

function fizz_buzz(number){
  if (number%3==0&&number%5==0){
  return "FizzBuzz"
}
if (number%3==0){
  return "Fizz"
}
if (number%5==0){
  return "Buzz"
}
else{
  return number+"!"
}
}

function specialEleven(number){
  if (number%11==0){
    return true
  }
  if ((number-1)%11==0){
    return true
  }
  else{
    return false
  }
}

function withoutDoubles(side1,side2,noDoubles){
  if (noDoubles&&(side1==side2)){
    var wrap = side1+side2+1
  }
  if(noDoubles&&(side1!==side2)){
    var wrap = side1+side2
  }
  if (side1>6||side2>6){
  var wrap = (side1+1+side2)-6
  }
   if (!noDoubles){
    var wrap= side1+side2z
  }
  if (noDoubles&&(side1==6&&side2==6)){
    var wrap = 7
  }
    return wrap
  }

  function left2(string){
    var n=string.length
    return string.substring(2,n)+string.substring (0,2)
  }
