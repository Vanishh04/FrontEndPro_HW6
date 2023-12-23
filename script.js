const button1 = document.querySelector('.button-task1');
const button2 = document.querySelector('.button-task2');
const button3 = document.querySelector('.button-task3');
const button4 = document.querySelector('.button-task4');
const button5 = document.querySelector('.button-task5');
const button6 = document.querySelector('.button-task6');
const button7 = document.querySelector('.button-task7');
const button8 = document.querySelector('.button-task8');
const button9 = document.querySelector('.button-task9');
const button10 = document.querySelector('.button-task10');

button1.addEventListener('click', () =>{
    let exampleString = '';
    for(let i = 10; i <= 20; i++){
        const iterationComa = `${i},`;
        const iterationDot = `${i}.`;
        if(i === 20){
            exampleString += iterationDot;
        }
        else{
            exampleString += iterationComa;
        }
       
    }
    alert(exampleString);
});

button2.addEventListener('click', () =>{
    let exampleString2 = '';
    for(let i = 10; i <= 20; i++){
        exampleString2 += `${i * i} `;
       
    }
    alert(exampleString2);
});

button3.addEventListener('click', () =>{
   let exampleString3 = '';
   const number = 7;
   for(let i = 0; i <= 10; i++){
     exampleString3 += `${number} * ${i} = ${number * i}\n\n`;
   }
   alert(exampleString3);
});

button4.addEventListener('click', () =>{
    let exampleString4 = 0;
    for(let i = 0; i <= 15; i++){
        exampleString4 += i;
    }
    alert(exampleString4);
});

button5.addEventListener('click', () =>{
    let exampleString5 = 1;
    for(let i = 15; i <= 35; i++){
        exampleString5 *= i;
    }
    alert(exampleString5);
});

button6.addEventListener('click', () =>{
   let exampleString6 = 0;
   let middleDefine = null;
   const threshholdI = 500;
   for(let i = 0; i <= threshholdI; i++){
     if(i === threshholdI){
        exampleString6 += i;
        middleDefine = exampleString6 / threshholdI;
     }
     else{
        exampleString6 += i;
     }
    }
    alert(middleDefine);
});

button7.addEventListener('click', () =>{
    let exampleString7 = 0;
    for(let i = 30; i <= 80; i++){
        if(i % 2 === 0){
            exampleString7 += i;
        }
    }
    alert(exampleString7);
});

button8.addEventListener('click', () => {
    let exampleString8 = null;
   for(let i = 100; i <= 200; i++){
    if(i % 3 === 0){
       exampleString8 += ` ${i} `;
    }
   }
   alert(exampleString8);
});

button9.addEventListener('click', () => {
    function getRandomNumber(min,max){
        return Math.round(Math.random() * (max - min));
    }
    function getDivisors(randomNumber){
        const arrNumber = [];
        for(let i = 1; i <= randomNumber; i++){
            if(randomNumber % i === 0){
               arrNumber.push(i);
            }
        }
        return arrNumber;
    }
    function findEvenOfDivisors(randomNumber){
        const arrQuantityOfDivisors = [];
        let sumDivisorsOfNumber = 0;
        for(let i = 1; i <= randomNumber; i++){
            if(randomNumber % i === 0 && i % 2 === 0){
                arrQuantityOfDivisors.push(i);
                sumDivisorsOfNumber += i;
            }
        }
        return {arrQuantityOfDivisors , sumDivisorsOfNumber};
    }
    const minI = 1;
    const maxI = 300;
    const getRandom = getRandomNumber(minI,maxI);
    const getDivisorsOfNumber = getDivisors(getRandom);
    const { arrQuantityOfDivisors, sumDivisorsOfNumber} = findEvenOfDivisors(getRandom);
    alert(`Шукаємо дільники для числа ${getRandom}, його дільники ${getDivisorsOfNumber.join(', ')}`);
    if(arrQuantityOfDivisors.length === 0 && sumDivisorsOfNumber === 0){
        const absentTheDivisors = 'Парні дільники та їх сума відсутні :(';
        alert(absentTheDivisors);
    }
    else{
        alert(`Маємо парні дільники числа ${getRandom}, це ${arrQuantityOfDivisors.join(', ')}, їх кількість ${arrQuantityOfDivisors.length}, а їх сума становить ${sumDivisorsOfNumber}`);
    }
    
});

button10.addEventListener('click', () =>{
    alert('Look for result at console')
   for(let i = 1; i <= 10; i++){
      for(let j = 1; j <= 10; j++){
        let multipleAction = i * j;
        console.log(`${i} * ${j} = ${multipleAction}`);
      }
      console.log('\n');
   }
});