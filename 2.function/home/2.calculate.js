/* 과제:
1.calculate.js를 callback 으로 refactoring 하라.
-, *, / 연산을 callback으로 처리한다.*/

let substract = function(val1, val2) {
    return val1 - val2;
}

let multifly = function(val1, val2) {
    return val1 * val2;
}

let divide = function(val1, val2){
    return val1 / val2;
}

// using switch
/*let calculate = function(val1, val2, oper='*'){
    switch(oper) {
        case '*': tmp = multifly(val1, val2); break
        case '-':  break
        case '/': tmp = divide(val1, val2); 
    }

    return tmp;
}*/

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