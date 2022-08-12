/* 과제:
2.callback.js 의 짜장면 이야기를, => function으로 refactoring 하라.
*/

let chef1 = (food) => `달콤한 ${food}.\n`
let chef2 = (food) => `매운 ${food}.\n`
let waiter = (food, chef) => chef(food)

console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2),
            waiter('짬뽕', chef2))