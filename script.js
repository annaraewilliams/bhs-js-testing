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

function firstLast6(array){
  var l = array.length
  if (array[l-1]==6||array[0]==6){
    return true
  }
  else{
    return false
  }
}

function has23(array){
  if ((array[0]==2||array[1]==2)||(array[0]==3||array[1]==3)){
    return true
  }
  else{
    return false
  }
}

function fix23(array){
  if ((array[0]==2)&&(array[1]==3)){
   array[1]=0
  }
  if ((array[1]==2)&&(array[2]==3)){
   array[2]=0
  }
  return array
}

function countYZ(string){
  var newString = string.toUpperCase();
  var c =0
  for (let i=0;i<newString.length;i++){
    if ((newString[i]==" ")&&((newString[i-1]=="Y")||(newString[i-1]=="Z"))){
      var c=c+1;
  } else if(i==newString.length-1){
    if ((newString[i]=="Y")||(newString[i]=="Z")){
      var c=c+1
  }
}
}
return c
}

function endOther (string1, string2){
  var newString1 = string1.toLowerCase();
  var newString2=string2.toLowerCase();
  if(newString1.endsWith(newString2)){
     return true
  }
  if (newString2.endsWith(newString1)){
    return true
  }
  else {
    return false
  }
  }

  function starOut(string){
    var answer = ""
    for (let i=0;i<string.length;i++){
        let y = string.charAt(i)
        if ((y!=="*")&&(string.charAt(i+1)!=="*")&&(string.charAt(i-1)!=="*")){
            answer = answer + y
        }
    }
    return answer
}

function getSandwich(string){
  var nothing = ""
  var position = string.indexOf("bread")
  var position2 = string.lastIndexOf("bread")
  if((!string.includes("bread"))){
    return nothing
  }
if (position==position2){
  return nothing
}
else {
    return string.substring(position+5,position2)
}
}

function canBalance(array){
  var answer1=""
  var answer2=""
    for (let i=0;i<array.length;i++){
      var answer1 = answer1+array[i]
      for (let j=i+1;j<array.length;j++){
        var answer2=answer2+array[j]
      }
      if(answer1==answer2){
        return true
      }
        var answer2=0
  }
}
