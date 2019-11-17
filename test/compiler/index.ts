import {createCompiler} from '../../src/compiler/index'
const id = 'app'
const template = (<any>document.getElementById(id)).innerHTML;
console.log('tmp',template);
const {compile} = createCompiler({})

console.log(compile(template))
