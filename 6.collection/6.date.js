console.log(Date())
console.log(typeof Date()) //string

let date = new Date()
console.log(date)
console.log(typeof date) //object
console.log(date.toLocaleDateString())  // 실행하는 국가에서의 날짜

date = new Date('2022-08-23T07:27:30.999Z') //UTC + 9시간 = 한국시간
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString()) // 실행하는 국가에서의 시각

console.log(
    date.getFullYear(), //2022
    date.getMonth(), //7 (0 ~ 11) 7은 8월
    date.getDate(), // 23(0 ~ 30)
    date.getUTCHours(), // 7
    date.getHours(), //16
    date.getMinutes(), //27
    date.getSeconds(), //30
    date.getMilliseconds(), ///999
    date.getDay() // 2 (0 ~ 6, 일 ~ 토) 
)

console.log(date.getTime()) //1661239650999 ms
console.log(Date.now())     //1661240971739 ms

date = new Date(0)
console.log(date)

date = new Date(1000 * 60 * 60 * 24) // 하루
console.log(date)

date = new Date(-1000 * 60 * 60 * 24)
console.log(date)