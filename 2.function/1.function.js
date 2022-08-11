// function의 이름은 임의로 지정
function greet(){
    console.log('hello')
}

greet()

//function을 data로 사용 시 function()으로 지정
let salute = function(){
    console.log('hi')
}

// 변수 오른쪽에 데이터O - write / 데이터x - read
salute()
console.log(salute)

// 변수명에 function이 담길때에는, 동사를 이용해주는게 원칙이다.
// function에 오는 값은 구분하기 힘드므로 이름으로써 구분하는게 좋다.
let sayHello = function(user, greeting){
    return `${greeting}, ${user}`   // back tick을 이용한 문법 - template literal
}

console.log(sayHello('rebecca', 'hello'))


// 과제: HI 라고 인사하는 function 을 정의하고, 실행하라.
// const로 선언 시, 값을 바꾸지 않겠다는 뜻으로 해석된다.
const sayHi = function(){
    console.log('HI')
}
const say = sayHi
say()


// js에서 아주 흔하게 쓰는 function을 이용하는 방법 - function을 리턴값으로 받아 쓴다.
let shout = function(){
    return function(){
        console.log('you hoo')      
    }
}

let speak = shout()
speak();

// function을 사용할때에는 꼭 이름을 써줘야한다.(변수명이 있어야한다.)
// function자체를 사용할때에는 괄호로 묶어서 read해 선언하면 이용 할 수는 있다.(활용도는 떨어짐)
// 이름없는 function을 쓰는경우는 종종있다.
(function() {
    console.log('earth')
})()


//function을 파라미터로 쓸때 function은 반드시 리턴이 있어야한다.
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