/* 과제:
2.3 jajangmyeon을 객체지향으로 refactoring하라.*/

function Chef1() {
    this.cook = food => `달콤한 ${food}`
}

function Chef2() {
    this.cook = food => `매운 ${food}`
}

function Waiter() {
    this.serve = chef => console.log(chef)
}

const chef1 = new Chef1()
const chef2 = new Chef2()
const waiter = new Waiter()


waiter.serve(chef1.cook('짜장면'))
waiter.serve(chef2.cook('짜장면'))
waiter.serve(chef2.cook('짬뽕'))