//string type ", ' 둘다가능
let foo = "I am string."
foo = 'So am I'
foo = `back tick`

//number type
foo = 1
foo = 1.0

console.log(1 / 0)
console.log('a' / 1) // NaN(Not a Number)

foo = 1
console.log(isFinite(foo))
foo = 'a'
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo) + 1)

foo = 'a'
foo = '100px'
foo = '+1'
//-은 구분자로 사용됨
foo = '123456-789123'
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))
console.log(parseFloat(foo))

let a = Infinity * 2
let b = NaN * 2
console.log(a, b)

a = Infinity * NaN
console.log(a)

//16자리를 초과하면 n을 표기한다
foo = 1n

//boolean type
const okay = true
const fail = false

let val = null

//undefined
let val2
val2 = undefined
console.log(val2)

let id = Symbol('id')
console.log(typeof id)

val = 1
val = String(val)
console.log(typeof val)

val = '6' / '2'
console.log(val)

val = false / true
console.log(val)

val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))
//0으로 리턴됨
console.log(Number(' '), Number(''), Number(null), Number(false))
console.log(Number('a'), Number(undefined), Number(NaN))

//값이 존재하기때문에 true
console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' '))
//false
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))
