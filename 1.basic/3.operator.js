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
let c = 3 - (a = 1 + 2)
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