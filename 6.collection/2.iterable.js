let range  = {
    from: 1,
    to: 3,
    [Symbol.iterator]() {     // Symbol.iterator - current 객체를 리턴        this.current = this.from
        this.current = this.from
        return this
    },

    next() {
        if(this.current <= this.to)
            return {
                done: false,        
                value: this.current++       // value 값이 출력될 값이다.
            }
        else
            return {
                done: true  // done - true이면 iterating이 끝났다 -> next를 진행하지않는다.
            }        
    }
}

for(let num of range)   // for(let ... of 객체)를 하게 되면 iterator를 실행하게되고 이것을 반복한다.
    console.log(num)



//Generator - iterator의 상위(최신)버전
function* generator() {              // generator를 만들때는 function에 *을 붙힌다.
    let val = 1
    while(val <= 3) yield val++     // yield한 값을 반복해서 리턴
}

for(let num of generator())
    console.log(num)

let g = generator()
console.log(g, typeof g)    // generator는 하나의 객체로 인식된다.

//
function* gen() {
    // yield를 여러개 사용할 수 있다.
    yield* generator()      // *을 붙히는거는 객체를 부를때
    yield* ['a', 'b']
    yield 9                 // 문자 숫자값만 부를때는 그냥쓴다
}

for(let val of gen())
    console.log(val)