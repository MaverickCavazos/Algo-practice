
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];


function sumArray() {

    const bigArray = arr_1.concat(arr_2);

    console.log(bigArray.reduce((a, b) => a + b, 0))

}

sumArray();



function evens() {
    for (let i = 2; i <= 22; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

evens();

function reverseLiterally() {
    let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

    const reversedArr = arr.toString().split('').reverse().join('');

    console.log(reversedArr);
}

reverseLiterally();

function reverseOrder() {
    let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

    const reversed = arr.reverse();

    console.log(reversed);
}

reverseOrder();

function sumOfArrayPosition() {
    let array1 = [4, 6, 7];
    let array2= [8, 1, 9];

    var sum = array1.map(function (num, idx) {
        return num + array2[idx];
      })
      console.log(sum);
}
sumOfArrayPosition();

function secondLetter() {
    let str = "javascript".split('');
    const replaceWith = "Z";
    for (let i=0; i<= str.length; i++){
        if((i+1) % 2 == 0){
            str[i] = replaceWith;
        }
        console.log(str.join(''));
    }
}

secondLetter();

function containtsY () {
    let str = "this does containt the letter y".split('');

    for(let i=0; i<=str.length; i++){
        if(str[i] == "Y"  || str[i] == "y"){
            console.log("yes this does contain Y");
        }
    }
}

containtsY();


function factorial (num){
    
    if (num === 0 || num === 1)
    console.log(1);

    for(let i = num - 1; i>=1; i--){
        num = num * i;
    }
    console.log(num);
}

factorial(8);


function passGuesser() {
    let pass = 2
    let maxAttempts = 4

    for(let i=1; i<= maxAttempts; i++){
    const guesser = Math.floor(Math.random() * 4)

    if(guesser === pass){
        console.log("success!");
    }else 
    console.log("wrong pass");
}
}
passGuesser();

function palindrom() {
    let arr = "youoy"
    const reversedArr = arr.toString().split('').reverse().join('');

    if(arr === reversedArr) {
        console.log("It is indeed")
    }else 
    console.log("tis not a palindrom")


}

palindrom();


function summation() {
    let num = 9;

    for(let i = 0; i<9; i++){
        num = num + i;
    }
    console.log(num);
}
summation();
