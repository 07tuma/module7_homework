/* 
* Задание 2 
*/

let obj = (str, object) => {
    return str in object;
 }
    
   let user = {
     name: 'Ivan',
     surname: 'Ivanov',
     city: 'Minsk'
 }
 
  console.log(obj('name', user));
  console.log(obj('position', user));
 