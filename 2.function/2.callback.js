// callback - function의 body안에서 또다른 function을 부른다.
function sayOdd(num){
    console.log(`${num} is an odd number.`)
}

function sayEven(num){
    console.log(`${num} is an even number.`)
}

// 이런식으로 파라미터로 fn을 받게되는 구조를 callback이라고 한다.
function lookNum(fn1, fn2){
    const num = parseInt(Math.random() * 10) + 1
    if(num % 2 != 0) fn1(num)
    else fn2(num)
}

lookNum(sayOdd, sayEven)


// 이렇게 같은 함수를 쓰더라도 다른방식의 유지보수가 편해지기때문에, 자주쓰게된다.
function sayOdd2(num){
    console.log(`${num}은 홀수입니다.`)
}

function sayEven2(num){
    console.log(`${num}은 짝수입니다.`)
}

lookNum(sayOdd2, sayEven2)

//
let chef1 = function(food) {
    return `달콤한 ${food}.\n`
}

let chef2 = function(food) {
    return `매운 ${food}.\n`
}

let waiter = function(food, chef){
    return chef(food)
}

console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2),
            waiter('짬뽕', chef2))
