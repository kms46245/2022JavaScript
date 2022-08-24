// promise에서 resolve나 reject를 실행하다 error가 발생한것을 연출했다.
new Promise((resolve, reject) => reject(new Error(2)))
    .catch(e => console.log(e.message)) // catch는 원래 reject를 처리할때 사용한다.

new Promise((resolve, reject) => {throw new Error(1)})
    .catch(e => console.log(e.message)) // 하지만 catch는 error가 났을때도 처리한다.

//
new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)})
    .catch(e => console.log(e.message))
    // 위처럼 executor에서 난 error뿐 아니라 handler에서 난 error도 잡아낸다.

new Promise((resolve, reject) => resolve('ok'))
    .then(result => blabla())   // 준비하지않은 method를 작동할때도 잡아낸다.
    .catch(e => console.log(e.message)) // 결과 - blabla is not defined

new Promise((resolve, reject) => {throw new Error(4)})
    .catch(e => console.log(e.message))
    .then(result => console.log(result))    // 순서를 바꾸어 then을 실행하면, catch를 실행하고서 다른사례도 실행하고있다.
                                            // 그렇기에 의도한것이 아니라면 catch는 마지막으로 쓰는것이 좋다.
                                            
new Promise((resolve, reject) => {throw new Error(5)})
    .catch(e => {       // 에러가 났을 경우 가장 가까운 핸들러인 여기로 넘어간다.
        if(e instanceof URIError) {   // URIError - url에 관해 에러가 났을때 사용되는 클래스
        } else {
            console.log(e.message)  // 결과 - 5
            throw e
        }
    }).then(() => console.log('여기는 실행되지 않습니다.'))
    .catch(e => console.log(e.message)) // 결과 - 5
    // 실행된 then에서 가장 가까운 catch핸들러가 또있기 때문에 then이 넘어가고 해당 catch 구문이 실행된다.
