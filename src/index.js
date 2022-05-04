console.log("Hello!")

import './style/index.scss'; // Attention ici, il faut bien mettre l'extension `.scss`

import { myFunction } from './js/file2'; // Pas besoin de mettre le '.js' à la fin !
import { myObject, anotherFunction } from './js/file3';

myFunction();
anotherFunction(myObject.message);

import dayjs  from './js/dayjs';
console.log(dayjs('2018-08-08').format('MMMM DD YYYY')); // January 18 2021
console.log(dayjs().subtract(10, 'days').format('DD/MM/YYYY')); // 08/01/2021


