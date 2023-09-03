const number = 30;
if (number % 3 === 0 && number % 5 === 0){
    console.log('FizzBuzz');
} else if(number % 3 === 0){
    console.log('Fizz');
} else if(number % 5 === 0){
    console.log('Buzz')
}


const year = 1904;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log('Высокосний');
} else {
    console.log('Не високосний')
}
