/* 과제:
산술 연산 함수를 만든다.

1. (값1, 값2, 연산자) 가 parameter 이다.
2. parameter value는 string type이다.
3. 연산자는 -, *, /로 한정한다.
4. client(function call)가 연산자를 정하지 않으면, * 을 연산자로 쓴다.
5. 연산 결과값을 return 한다.*/

let calculate = function(value1, value2, oper='*'){
    let tmp = 0
    switch(oper) {
        case '*': tmp = value1 * value2; break
        case '-': tmp = value1 - value2; break
        case '/': tmp = value1 / value2; 
    }
    
    return tmp
}
console.log(calculate('1','2','/'))
console.log(calculate('1','2','-'))
console.log(calculate('1','2'))

// (receive)
let calc = function(a, b, op='*'){
    let result

    switch(op){
        case '-': result = a - b; break
        case '*': result = a * b; break
        case '/': result = a / b
    }

    return result
}
console.log()
console.log(calc('1', '2', '-'))
console.log(calc('2', '2'))