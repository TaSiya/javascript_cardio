// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  var splitted = str.split('');
  var answer ='';
  for(var i = 0; i < str.length; i++){
     answer = splitted[i] + answer;
 }
  return answer;
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
   //Method 1
   /*
   var splitted = str.split('');
   var str2 = '';
   for(var i = 0 ; i < str.length ; i++){
      str2 = splitted[i] + str2;
   }
   if(str === str2){ return true;}
   else{ return false;}
   */

   //Method 2
   var answer2 = '';
   for(var i = 0 ; i < str.length+1 ; i++){
      answer2 = str.substring(i,i+1) + answer2;
   }
   if(str === answer2){ return true;}
   else{ return false;}
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
   var parsedInt = int.toString();
   var splitIt = parsedInt.split('');
   var storeIt = '';
   for(var i = 0 ; i < parsedInt.length ; i++){
      storeIt = splitIt[i] + storeIt;
   }
   return storeIt;

}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}



// Call Function

//console.log(reverseString('hello'));
var pali = 'racecar';
console.log('Is '+pali+' a palindrome => '+isPalindrome(pali));
var numberReverse = 123456789;
console.log(reverseInt(numberReverse));
