import {greet, add} from './1.named.mjs'
import * as named from './1.named.mjs'
import div from './2.default.mjs'   //없는값에 대해 기본값을 불러왔다.

console.log(greet, add(1, 2))
console.log(named.greet, named.add(1, 2))

console.log(div(4, 2))