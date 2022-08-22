class CoffeeMachine {
    #waterAmount        // private속성을 만들때에는 #을붙힌다.

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine)
console.log(CoffeeMachine.prototype)    // protected와 마찬가지로 accessor는 프로토타입이 가지고있다.

let machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine.waterAmount)    // accessor를 이용하여 적용되었다.

//machine.#waterAmount = 1    // SyntaxError - accessor를 이용하여 접근하라고 뜬다.
