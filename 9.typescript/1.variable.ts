/* 실행전 설치할 것(cmd로 실행)
npm i -g typescript
npm i -g ts-node
npm i -g @types/node
*/


let msg: string = 'hello'   // js와는 다르게 타입을 직접 지정해준다.
//msg = 1 // 타입이 불일치하면 error가 난다.

let val: number = 1
let nullableStr: string | null = null   // 여러 타입을 쓸때에는 | 로 나열한다.
nullableStr = 'hi'
//  nuallableStr = undefined    // 타입 불일치시 error

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'bye'
numberOrStringOrNull = null

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0 // type 불일치

let anyValue: any = null    // js처럼 any타입을 쓸때에는 any타입으로 선언해준다.
anyValue = undefined
anyValue = 1
anyValue = 'hello'

//
let a = 1           // 할당연산자로 value를 넣어주면 컴파일러가 판단해서 맞춰준다.
let b = 'b'         // 이렇게하면 ts사용의 의미가 줄어드므로 권장하진 않는다.
let c = true

// ** tsc로 터미널을 통해 실행하면 js파일이 생성되고 그것을 읽는 원리이다.