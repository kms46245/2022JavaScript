import {greet, add} from './remind_JS(0825).7.1.named.mjs'
import * as named from './remind_JS(0825).7.1.named.mjs'
import div from './remind_JS(0825).7.2.default.mjs' // 없는 값이므로 기본값을 불러옴

console.log(greet, add(1,2))
console.log(named.greet, named.add(1,2))

console.log(div(4, 2))