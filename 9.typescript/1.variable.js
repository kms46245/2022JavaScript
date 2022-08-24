/* 실행전 설치할 것(cmd로 실행)
npm i -g typescript
npm i -g ts-node
npm i -g @types/node
*/
var msg = 'hello'; // js와는 다르게 타입을 직접 지정해준다.
//msg = 1 // 타입이 불일치하면 error가 난다.
var val = 1;
var nullableStr = null; // 여러 타입을 쓸때에는 | 로 나열한다.
nullableStr = 'hi';
//  nuallableStr = undefined    // 타입 불일치시 error
var undefinedOrNumber;
undefinedOrNumber = 10;
undefinedOrNumber = undefined;
var numberOrStringOrNull = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'bye';
numberOrStringOrNull = null;
var isCompleted = true;
isCompleted = false;
// isCompleted = 0 // type 불일치
var anyValue = null; // js처럼 any타입을 쓸때에는 any타입으로 선언해준다.
anyValue = undefined;
anyValue = 1;
anyValue = 'hello';
//
var a = 1; // 할당연산자로 value를 넣어주면 컴파일러가 판단해서 맞춰준다.
var b = 'b'; // 이렇게하면 ts사용의 의미가 줄어드므로 권장하진 않는다.
var c = true;
