let val = 1 + 2 * 3 / 2
                    //4의2승   루트4
console.log(val, 5 % 2, 4**2, 4**(1/2))

let i = 1
console.log(++i, i++)

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)
console.log(1 + '2', '1' + '2')

//문자앞에+를 붙이면 숫자로 변환됨
//unary plus operator
console.log(1 + +'2')

//마지막으로 읽은 값을 리턴한다
console.log(1 || 0, 0 || 1)
console.log(1 && 0, 0 && 1)
console.log(1 && 2, 2 && 1)

//foo에 값이 있으면 do를 호출하겠다
//foo && do(foo)

// 둘중 true인값을 bar에 할당한다
//bar = baz || createBar()

console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)


//비교연산자
console.log()
console.log('2' > 1, '01' == 1)