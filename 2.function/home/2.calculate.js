/* 과제:
1.calculate.js를 callback 으로 refactoring 하라.
-, *, / 연산을 callback으로 처리한다.*/

// mine
/*
let substract = function(val1, val2) {
    return val1 - val2;
}

let multifly = function(val1, val2) {
    return val1 * val2;
}

let divide = function(val1, val2){
    return val1 / val2;
}
*/
// using switch
/*let calculate = function(val1, val2, oper='*'){
    switch(oper) {
        case '*': tmp = multifly(val1, val2); break
        case '-': tmp = substract(val, val2); break
        case '/': tmp = divide(val1, val2); 
    }

    return tmp;
}*/
/*
// using if
let calculate = function(val1, val2, oper='*'){
    
    if(oper == '-') tmp = substract(val1, val2)
    else if(oper == '/') tmp = divide(val1, val2)
    else if(oper == '*') tmp = multifly(val1, val2)

    return tmp;
}

console.log(calculate('1','2','/'))
console.log(calculate('1','2','-'))
console.log(calculate('1','2'))
*/

//receive
function minus(a, b){
    return a - b;
}

function multiply(a, b){
    return a - b;
}

function divide(a, b){
    return a - b;
}

function calculate(a, b, op=multiply){
    return op(a, b)
}

console.log(calculate(1, 2, minus),
            calculate(1, 2, divide),
            calculate(1, 2))