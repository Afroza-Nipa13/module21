// function tenTimes (number){
//     const result = number * 10;
//     return result;
    
// }

// function cutHalf(number) {
//     const half= number /2;
//     return half;
// }

// tenTimes(5);

// const output = tenTimes(5);
// console.log('output',output);


// const bigNumber =tenTimes(99);
// console.log(bigNumber);


function add (price1,price2){
    const total = price1+price2;
    return total;
}
const bill = add(5, 80);

function add2 (price1, price2){
    return price1 + price2;
}

const bill2 = add(5, 80);
console.log(bill,bill2);


// onek gulo math lagle sei khetre

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1- num2;
    const multiply=sum * diff;
    const result = multiply /2;
    return result;
}

const result = doMath(10, 5);
console.log(result);

///jor shongkha check korar jonno 
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
 console.log(isEven(5));
 console.log(isEven(110));

 function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
 }
 console.log(isOdd(10));
 console,log(isOdd(7));