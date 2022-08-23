let user = {name: 'scott'}
let fn = () => 1
let arr = ['ucal', user, 'today', fn, 'ucal', user, 1, 1, fn]

function refine(arr) {    
    return Array.from(new Set(arr))
}

console.log(refine(arr))

// 과제] 파라미터에서 중복된 값을 제거한 배열을 출력하라.