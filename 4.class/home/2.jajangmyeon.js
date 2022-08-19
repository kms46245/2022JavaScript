/* 과제:
3.home.4.jajangmyeon을 class로 refactoring 하라.*/

/* me-made
class Food {
    constructor(taste, name){
        this.taste = taste
        this.name = name
    }
}

class Chef {
    constructor(taste) {
        this.taste = taste
    }
    
    cook(foodName) {   
        return new Food(this.taste, foodName)
    }
}

class Waiter {
    order(foodName, chef) {
        return chef.cook(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)
waiter.order('짬뽕', chef2)

//확인용 로그
console.log(waiter.order('짜장면', chef1))
console.log(waiter.order('짜장면', chef2))
console.log(waiter.order('짬뽕', chef2)) */

//receive
class Food {
    constructor(taste, name){
        this.taste = taste
        this.name = name
    }
    
    [Symbol.toPrimitive](){
        return `${this.taste} ${this.name}`
    }
}

// using lambda
class Chef {
    constructor(taste) {
        this.cook = foodName => new Food(taste, foodName)
    }    
}

// using return (classic)   둘중 편한걸로 쓰면된다.
class Waiter {
    order(foodName, chef) {
        return chef.cook(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)
console.log((waiter.order('짬뽕', chef2)))

/* 과제:
위 로그값이 '매운 짬뽕'이 출력되도록 하라. 
*/

waiter.valueOf = function(){
    return `${this.taste} ${this.foodName}`
}

console.log(`${waiter.order('짬뽕', chef2)}`)