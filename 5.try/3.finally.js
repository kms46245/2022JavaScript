function laugh(cnt) {
    if(cnt <= 0 || Math.trunc(cnt) != cnt)  // 음수이거나 float인경우
        throw new Error('반복 횟수는 자연수여야 합니다.')     // 제일 상위의 클래스는 Error
    
    let phrase = ''
    for(let i = 0; i < cnt; i++) phrase += 'ha '
    
    return phrase
}

let diff
let start = Date.now()

try{
    console.log(laugh(3))
    laugh(3.1)
} catch(e) {
    console.log(e.message)
} finally { // try, catch이든 마지막으로 실행하고싶은 부분들을 이용한다.
    diff = Date.now() - start
}

console.log(`경과시간: ${diff}ms`)