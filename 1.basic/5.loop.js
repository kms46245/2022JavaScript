
//while
let i = 0
while(i < 2) {
    console.log(`while: ${i + 10}`) 
    i++
}
// backtick을 이용하면 문장으로 이루어진 값들을 묶어서 한번에 표현할 수 있다.


//do-while
do{
    console.log('do')
} while(false)

//for
for(let i = 0; i < 2; i++)
    console.log(`for: ${i}`)


//loop 중 break
for(let i = 0; i < 5; i++){
    if(i >= 2) break
    console.log(i)
}