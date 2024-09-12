// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let index = 0; index <= 10; index++) {
    if (index === 0) {
        console.log(`${index} - это ноль`)
    }else if(index % 2){
        console.log(`${index} - это нечетное число`)
    }else{
        console.log(`${index} - это четное число`)
    }
    
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const mass = [1, 2, 3, 4, 5, 6, 7]
console.log(mass)
for (let i = 0; i < mass.length; i++) {
    const element = mass[i];
    if (mass[i] === 4 || mass[i] === 5) {
        mass.splice(i, 1)
        i--
    }else{
        continue;
    }
}
console.log(mass)

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const array = [];

for (let i = 0; i < 5; i++) {
   array.push(Math.floor(Math.random() * 10))
}
console.log(array)
let sum = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = sum + array[i]
}
console.log(sum)
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (array[i] === 3) {
        console.log(`Число 3 в массиве под индексом ${i}`)
    }else{
        continue
    }
}


// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
let x = "x"
for (let index = 0; index <= 20; index++) {
    console.log(x)
    x = x + "xx"
}