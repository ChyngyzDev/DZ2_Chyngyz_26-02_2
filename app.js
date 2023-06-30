let box = document.querySelector('#child');

let positionY = 0
let positionX = 0

const move = () => {
  if(positionX < 400 && positionY === 0 ) {
    positionX += 16
    box.style.left = `${positionX}px`
    setTimeout(move, 100)
  }else if(positionX >= 400 && positionY < 400){
    positionY +=16
    box.style.top = `${positionY}px`
    setTimeout(move, 100)
  }else if(positionX >= 0 && positionY >= 400){
    positionX -=16
    box.style.left = `${positionX}px`
    setTimeout(move, 100)
  }
  else if(positionX <= 0 && positionY >= 0){
    positionY -=16
    box.style.top = `${positionY}px`
    setTimeout(move, 100)
  }
}
move()

// box.addEventListener('click', () => {
// move()
// })

// const people = {
//   Alex: {
//     age: 20,
//     parents: {
//       John: {
//         age: 40,
//         parents: {
//           Mbappe: {
//             age: 80,
//             parents: {
//               Kilyan: {
//                 age: 100
//               }
//             }
//           }
//         }
//       }
//     }
//   },
//   Bob: {
//     age: 21,
//     parents: {
//       Steve: {
//         age: 50
//       }
//     }
//   },
//   Sasha: {
//     age: 23,
// parents: {
//   Oleg: {
//     age: 60
//   }
// }
//   }
// }


// console.log(people.Alex.parents);
// console.log(people.Bob.parents);

// const parentList = (human) => {
//   if(human.parents) {
//     console.log(human.parents);
//     for(let key in human.parents){
//       // console.log(human.parents [key]);
//       parentList(human.parents[key])
//     }
//   }else{
//     console.log('...oops');
//   }
//   // console.log(human.parents);
//   }
//   for(let key in people) {
//     parentList(people[key])
//   }
// parentList(people.Alex)

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

//Асиинхронная фукция
// Асинхронные фукции выполняются только после синхронных функций
// setTimeout(()=> {
//   console.log(1);
// }, 0)
// console.log(2);

// setTimeout(()=> {
//   console.log(3);
// }, 3000)

// setTimeout(()=> {
//   console.log(4);
// }, 999)

// setTimeout(()=> {
//   console.log(5);
// }, 0)
// console.log(6);

// const interval = setInterval(()=> {
//     console.log('Hello');
// },1000)

// // setTimeout(()=> {
// //     clearInterval(interval)
// //   }, 6000)

// const button = document.querySelector('button')

// button.addEventListener('click', () =>{
//   clearInterval(interval)
// })


//HOF Функции вышего порядка
//Функция которя вызывает в себя другую фукцию

// const subject = prompt('Subject?')

// const doHomeWork = (finish, subject = 'Bio') => {
//   alert(`starting my ${subject} homework`)
//   return finish()
// }
// const alertFinish = () => {
//   alert(`FINISH!!! done home work`)
// }
// doHomeWork(alertFinish, subject)


// const profiles = [
//   {
//     name: 'Artem',
//     age: 22
//   },
//   {
//     name: 'Emir',
//     age: 18
//   },
//   {
//     name: 'Emir',
//     age: 18
//   },
//   {
//     name: 'Said',
//     age: 18
//   }
// ]

// const wrapper = document.querySelector('.wrapper')

// profiles.forEach((item, i, arr) => {
//   const div = document.createElement('div')
//   div.setAttribute('class', 'profile')
//   div.innerHTML = `
//   <img alt='img' src='https://pp.userapi.com/c846021/v846021109/18c30b/R8QA8FFaA68.jpg?ava=1'
//     <h2>${item.name}</h2>
//     <p>${item.age}</p>

//   `
//   wrapper.append(div)
// }
// )
//  const arr = [1,2,3,4,5]
//  const res = arr.unshift() //pop, shift



// //  const res = arr.pop()
//  console.log(arr);
//  console.log(res);


//Пример как работает фильтр
// const fruits = ['apple', 'banana', 'peach']
// const res = fruits.filter(item => item.length > 5  && )
// console.log(res);