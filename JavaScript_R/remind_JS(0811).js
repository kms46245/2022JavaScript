'use strict'

/* 1. variable
// 변수 - 변수명은 문자/특문으로 시작 (숫자는 되지않는다.)
let user
let user2
//let 2user
let _user
let $user

let userName
let user_name

//상수 - 상수선언시 초기값을 지정 해줘야함
const x = 1
x = 2
*/



// 2.type
// string type - 선언 시, ' " 둘 다 가용
// `(back tick)도 사용가능 - 이후에 string외 용도 배울 예정
let foo = "string"
foo = 'str'
foo = `back tick`

// number type
foo = 1
foo = 1.0

console.log(1 / 0)   // Infinity
console.log('a' / 1) // NaN(Not a Number)

foo = 1
console.log(isFinite(foo))  // isFinite - 유한한가 (숫자인가의 여부)
foo = 'a'
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo) + 1)  // parseInt - 문자로 된 숫자를 상수로 변환
foo = 'a'
console.log(parseInt(foo)) // 문자는 NaN으로 변환됨
foo = '100px'
console.log(parseInt(foo)) // 픽셀(px[단위])은 변환가능
foo = '+1'
console.log(parseInt(foo)) // 부호가 붙어있어도 변환가능.
foo = '123456-789123'
console.log(parseInt(foo)) // 다만 -는 구분자로 사용되므로 잘리게된다.

foo = '1.6'
console.log(parseInt(foo))  // parseint는 소수점이하를 버리게된다.
console.log(parseFloat(foo)) // 그러므로 parseFloat을 이용하면 소수점 까지 변환


let a = Infinity * 2    // Inf,Nan은 어떤수를 곱하더라도 여전히 유지
let b = NaN * 2
let c = Infinity * NaN  // 하지만 서로 곱하게되면 NaN이된다.(NaN이 좀더 상위)
console.log(a , b,  c)  

foo = 1n                // 16자릿수가 넘게될 경우, n을 표기하여 알아볼 수 있다.



//boolean type - 기본적으로 true와 false로 이루어짐
const okay = true
const fail = false

// null / undefined - 값이 존재하지않는다라는 개념은 똑같지만 다른 의미(undef는 무엇인지 정의가 되지않음)
let val = null
let val2 = undefined
console.log(val, val2)

let id = Symbol('id')  // symbol - 타입의 한종류 - 유일한 식별자를만들고 싶을때 사용 
console.log(typeof id) // typeof - 해당 문자의 타입을 읽는다.
val = 1
val = String(val)
console.log(typeof val) 

val = '6' / '2'
console.log(val)        // 문자형으로 계산시도하면 자동으로 casting되어 계산해줌

val = false / true
console.log(val)        // false = 0 <-> true = 1로 취급이기에 계산되면 0으로처리됨 -> C언어의 잔재같은것

val = '1'
val = Number(val)       // Number - 숫자형타입
console.log(val)

console.log(Number('1'), Number(true))

// 값이 존재하지않는 경우들에 한에서는 0으로 리턴된다.
console.log(Number(' '), Number(''), Number(null), Number(false))
// 숫자형타입으로 전환이 안되는 경우는 NaN으로 리턴된다.
console.log(Number('a'), Number(undefined), Number(NaN))

// boolean type들은 값이 있고 없고의 차이에 따라 true false로 갈린다.
console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' '))
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))




// 3.연산자(Operator)
val = 1 + 2 * 3  / 2        // 기본적인 사칙연산은 같다.
console.log(val, 5 % 2, 4**2, 4**(1/2)) // 응용하여 제곱(**)이나 제곱을 응용해 루트도 표현 가능

let i = 1
console.log(++i, i++)       // 전위 후위연산자도 적용가능

foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)    // 문자열도 연산으로 합치기가능
console.log(1 + '2' , '1' + '2')    // 다만 문자열과 숫자 / 문자열과 문자열로 상수 합치면 계산이 아니라 붙히기


console.log(1 + +'2') // 위 상황처럼 붙이기로 쓰고 싶지않다면 문자앞에 +를 붙이면 상수로 전환되어 계산가능

//and(&&)는 false가 처음으로 나올때를 리턴한다.
//or(||)은 마지막으로 읽은 값을 리턴한다.
console.log(1 || 0, 0 || 1)
console.log(1 && 0, 0 && 1)
console.log(1 && 2, 2 && 1)

//foo에 값이 있으면 do를 호출하겠다
//foo && do(foo)

// 둘중 true인값을 bar에 할당한다
//bar = baz || createBar()

console.log()
c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)


//비교연산자
//결국 빈값, 0, false <-> 값, 1, true에 관해 비교연산자를 실행해
// 같은 값이 들어서면 true 아니라면 false가 된다.
console.log()
console.log('2' > 1, '01' == 1, false == 0, '' == false)
console.log(true > 1)

//두개의 값이 달라도 같다고 처리가 되고있다.
//타입이 다를때 false로 처리하려면 =를 하나 더 붙인다.
// equivalent - 타입에 관계없이 값이 같으면 같다고 처리
console.log(1 == '1', 1 != '1')

// indentical - 타입이 다르게되면 값이 다르다고 처리
console.log(1 === '1', 1 !== '1')

// 1. unicode가 있다는것을 인지하기에 유니코드 순서상 z가 a보다 위에 있기에 true다
// 2. 여러개의 문자가 있을때에는 인덱스의 개념으로 앞에것끼리 비교를해 다르면, 그 뒤 인덱스를 체크
// 3. 같은 인덱스 자리에 null이 있게되면 0으로 취급되어 문자가 있는것보다 작게 처리
// 4. 소문자는 대문자보다 unicode가 높으므로 true
console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A')

// null이 들어가게되면 어떠한 값이 오더라도 예외적인 경우를 제외하고 false가 된다.
// undefined, NaN는 null과 비슷하지만 모든경우가 false
console.log(null > 0, null < 0, null >= 0, null == 0)
console.log(undefined > 0, undefined >= 0, undefined == 0)
console.log(NaN > 0, NaN >= 0, NaN == 0)
// 하지만 같은 것 끼리 비교를 할때, NaN은 false이다.
console.log(undefined == undefined, null == null, NaN == NaN)