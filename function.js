/*repository: snap-function-pretest
write a function that (one per file)
0) uses an if block to return true if the input is the answer to life, the universe and everything - false if not
	1) capitalizes the first letter of a string that is input
2) sums an array WITHOUT the use of system functions such as array_sum()
3) rewrite str_repeat(): repeat the string (first input) the number of times specified (second input)
4) find the dot product of two given arrays
*/
//0) uses an if block to return true if the input is the answer to life, the universe and everything - false if not:
let answerToLife = true;
if (answerToLife===true) {
	console.log('0- Yes, this is the answer to life, the universe and everything')
} else {
	console.log('0- No, keep looking for the answer')
};
//	1) capitalizes the first letter of a string that is input:
let myString= 'Wafer marshmallow tootsie roll croissant jelly beans. Tootsie roll macaroon gingerbread lemon drops tootsie roll chocolate cake marshmallow dragée. Donut chocolate cake chocolate lollipop.'.toLowerCase();
console.log('1- '+myString);
//2) sums an array WITHOUT the use of system functions such as array_sum()
const numbers =[1,2,3,4,5,6,7,8,9];
//this doesn't work:
const add = (a,b,c,d,e,f,g,h,i) =>
	a+b+c+d+e+f+g+h+i;
//this works, but I don't know if using "sum" is allowed:
var numbers =[1,2,3,4,5,6,7,8,9];
var sum = 0;
for(var i = 0; i < numbers.length; i++){
	sum += numbers[i];
}
console.log(sum);

}


//3) rewrite str_repeat(): repeat the string (first input) the number of times specified (second input)
var stringInput = 'hello, I am a string';
var repeatTimes = 3;



//4) find the dot product of two given arrays