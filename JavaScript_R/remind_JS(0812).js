// 1.4 jump
//if(true이면 실행 false이면 건너뛰고 else)
if(true){}
if(false){} else{}

// undefined,null,0은 값이 없는 것이기에 (false) 실행이 건너 뛰게된다.
if(undefined) {console.log('!')}
if(null) {console.log('!')}
if(0) {console.log('!')}

// 값이 존재하고있으므로 true이기에 조건문 실행
if(-1) {console.log('!')}

console.log(true ? 1 : 0)

//Switch
//명령문이 한줄에 2개이상일때는 ;으로 구분 하자.
let val

switch('boo') {
    case 'bar': val = 'bar'; break
    case 'baz': val = 'baz'
    default: val = 'all right'
}

console.log(val)




// 1.5loop
//while
let i = 0
while(i < 2) {
    console.log(`while: ${i + 10}`) 
    i++
}
// backtick을 이용하면 문장으로 이루어진 값들을 묶어서 한번에 표현할 수 있다.


//do-while
do{
    console.log('do')
} while(false)

//for
for(let i = 0; i < 2; i++)
    console.log(`for: ${i}`)


//loop 중 break
for(let i = 0; i < 5; i++){
    if(i >= 2) break
    console.log(i)
}


//2.1 function
//이름에는 제약 없이 지정가능(동사로 맞추는게 원칙이긴함)
function greet(){
    console.log('hello')
}

greet()

//function을 data로도 쓸수 있다 - {func}()로 사용
let salute = function(){
    console.log('hi')
}

salute()
console.log(salute)

// function의 parameter로 이용되는 값은 네이밍으로써 구분해주면 좋다(지정을 해주기가 불가능)
let sayHello = function(user, greeting){
    return `I say '${greeting}', to ${user}`
}

console.log(sayHello('rebecca', 'hello'))

// 과제: HI 라고 인사하는 function 을 정의하고, 실행하라.
// const로 선언 시, 값을 바꾸지 않겠다는 뜻으로 해석된다.
const sayHi = function(){
    console.log('HI')
}
const say = sayHi
say()

//function을 return으로 받아 값으로 쓰는것이 js에서 가장 일반적으로 쓰인다.
let shout = function(){
    return function(){
        console.log('ya ho')
    }
}

let speak = shout()
speak();

// 이름이 있는 function을 사용할땐 반드시 이름을 사용해줘야하지만
// 이름없는 function을 이용하는 경우도 종종있다.
(function() {
    console.log('earth')
})()

//function을 parameter로서 사용할때 해당 function은 반드시 리턴값이 존재해야한다.
let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

myFn(function() { 
    return 'moon'
})

let argFn = function(){
    return 'star'
}
myFn(argFn)

// default로 값을 주지않을때에는 변수의 기본값은 undefined로 지정된다.
// 해당 value에 기본값을 주면 undefined가 아닌 기본값을 받는다.
let showMsg = function(from, msg='no message'){
    console.log(`${from}: ${msg}`)
}

showMsg('trinity', 'follow rabbit')
showMsg('trinity')


//2.2 callback
//callback - function안에서 다른 function을 사용하는 것
function sayOdd(num){
    console.log(`${num} is an odd number`)
}

function sayEven(num){
    console.log(`${num} is an Even number`)
}

// parameter를 fn으로 받는 이러한 구조가 callback이다.
function lookNum(fn1, fn2){
    const num = parseInt(Math.random() *10) + 1
    if(num%2 != 0) fn1(num)
    else fn2(num)
}

lookNum(sayOdd, sayEven)

// callback을 쓰는 이유 - 유지보수가 편해진다.
// ex) 영어로된 sayOdd,sayEven함수를 한글로 바꾸는것에 모든 looknum을 바꿀 필요가없다.
function sayOdd2(num){
    console.log(`${num}은 홀수입니다.`)
}

function sayEven2(num){
    console.log(`${num}은 짝수입니다.`)
}

lookNum(sayOdd2, sayEven2)

// 또다른예)
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


/* 과제 - 1.calculate.js를 callback 으로 refactoring 하라.
-, *, / 연산을 callback으로 처리한다.*/
function minus(val1, val2){
    return val1 - val2
}

function multiply(val1, val2){
    return val1 * val2
}

function divide(val1, val2){
    return val1 / val2
}


function calc(val1, val2, op=multiply){
    return op(val1, val2)
}
console.log(calc('3', '4', divide))
console.log(calc('1', '2', minus))
console.log(calc('2', '2'))
console.log('-----------------------')


//2.3 Arrow
// 기존의 코드를 arrow로 작성 시, 더욱 짧고 가독성 좋게 바꿀 수 있다.
// 기존 code
let add = function(a, b){
    return a + b
}
// Arrow code
add = (a, b) => a + b

console.log(add(1, 2))

//parameter가 하나일땐 괄호 생략 가능
const double = n => n * 2
console.log(double(3))

// parameter가 비어있는 함수는 parameter에 빈 괄호를 넣어준다.
greet = () => console.log('hello')
greet()

// 여러개의 명령문을 실행하기 위해선 블록 - {} 을 이용한다.
add = (a, b) => {
    const result = a + b
    return result
}

console.log(add(3, 4))



//2.4 rest(나머지)
// 원래 function에서 필요 parameter보다 더 많은 갯수를 넣는경우엔 무시 된다.
let add2 = (a, b) =>  a + b
// 3이 무시됨
console.log(add2(1,2,3))

// ...(rest) -> parameter에 사용할 경우, 파라미터의 갯수가 n개가 된다.(유동적으로 갯수가 변경됨)
add2 = (...args) => {
    let tot = 0
    for (let arg of args) tot += arg
    return tot
}
// 파라미터의 갯수를 얼마든 늘려도 다 적용된다.(배열과 비슷함)
console.log(add2(1),
            add2(1, 2, 3),
            add2(1,2,3,4,5,6,7,8,9))


// 주의) rest parameter는 항상 마지막에 위치해야한다(문법적으로라 아닌경우 에러발생)
function printName(firstName, lastName, ...titles){
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul')

// arguments - parameter가 정의 되지않은곳에 임시공간을 만들어주는 개념(?)
function showName(){
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
showName('erica', 'terry')

// max - paramet의 최고값 리턴
console.log(Math.max(1, 2, 3))