// export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// //export class
// export class User {
//     constructor(name) {
//       this.name = name;
//     }
// }


// function sayHi(user) {
//     alert(`Hello, ${user}!`);
//   }
  
//   function sayBye(user) {
//     alert(`Bye, ${user}!`);
//   }
// export {sayHi, sayBye};

// export {sayHi as hi, sayBye as bye};

// export default class User{
// 	constructor(name){
// 		this.name = name;
// 	}
// }

// export function hi() {
//   alert(`Привет`);
// }

// export function bye() {
//   alert(`Пока`);
// }

// export default function(){
// 	alert('hi Lili');
// }

export function hi() {
  alert(`Привет`);
}

export function bye() {
  alert(`Пока`);
}

export default function() {
  alert("Модуль загружен (экспорт по умолчанию)!");
}

//without promise

export {sayHi as hi, sayBye as bye};