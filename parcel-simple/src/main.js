// import imageURL from './assets/img/back.png'
// class Person {
//     constructor({name, age, height}) {
//         this.name = name;
//         this.age = age;
//         this.height = height;
//     }
//     say() {
//         console.log(this.name, this.age, this.height)
//     }
// }
// let person = new Person({
//     name: 'haha',
//     age: 22,
//     height: '178cm'
// });
// person.say();
// import('./src').then((page) => {
//     page.render();
// })
import 'babel-polyfill'
const page = await import('./src/index');
page.default();