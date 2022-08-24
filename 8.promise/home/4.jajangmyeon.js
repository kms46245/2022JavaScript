// 과제] promise를 이용해 짜장면 이야기(4.home.2 참조)를 refactoring하라.
class Food {
    constructor(taste, name){
        this.taste = taste
        this.name = name
    }
    
    //serializing
    [Symbol.toPrimitive](){
        return `${this.taste} ${this.name}`
    }
}

class Chef {
    constructor(taste) {      
        this.taste = taste
    }

    cook(foodName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(new Food(this.taste, foodName)), 1000)
        })
    }
}

class Waiter {
    async order(foodName, chef) {        
        return await chef.cook(foodName)
    }   
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()


waiter.order('짜장면', chef1).then(food => console.log(food + ''))
waiter.order('짬뽕', chef2).then(food => console.log(food + ''))