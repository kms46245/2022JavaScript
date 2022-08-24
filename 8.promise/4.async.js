async function f() {  // promise의 상위버전
                // async가 실행되면 자동으로 promise로 만들어준다.
    return 1    // 여기에서의 return값은 promise의 result값이 된다.
}                              

f().then(console.log)

f = async function() {
    return Promise.resolve(2)
}
f().then(console.log)   // resolve의 값도 직접 사용할 수있다.

f = async function() {
    return Promise.reject(new Error(3))
}
f().catch(e => console.log(e.message))  // reject도 마찬가지

//
f = async function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 1000)
    })
    let result = await promise  // await - 다음명령문이 실행될때까지 promise를 지연시킨다.
                                //         일반 fn에선 실행할 수 없다.
    console.log(result)         // 만약 await가 적용되지않으면 값이 undef로 나와한다.
}
f() // 실행하니 정상적으로 1초를 기다리고 4가나온것을 확인했다.


//

class Waiter {
    async wait() { 
        return await Promise.resolve('cooked bread')
    }
}

new Waiter().wait().then(console.log)   // 필요한 경우에는 해당 클래스의 프로미스가 끝나기전까지 작동을 중지 시킬수 있다.
