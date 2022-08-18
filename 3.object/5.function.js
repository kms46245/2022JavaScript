function sayHi(myName, ...jobs) {
    console.log(`Hi, i am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name)
console.log(sayHi.length)  // fucntion의 길이는 따질수 없다. (1이나옴)

//
let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

sayHi = function() {
    let count = 100
    console.log('hi')
    console.log(sayHi.count++)
}

sayHi()
console.log(`call count : ${sayHi.count}`)  // Nan이 나오는 이유 -> sayhi의 count는 지역변수이기에 존재하지않게된다.

sayHi.count = 0             // 직접 sayhi의 count를 선언해줌으로서 존재하게된다.
sayHi()
sayHi()
console.log(`call count : ${sayHi.count}`)