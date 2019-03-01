// Sum of all arguments
function sum(){
    let result = 0;

    for(let i=0; i<arguments.length; i++){
        result += arguments[i]; // accumulate sum from arguments
    }

    return result;
}
console.log('SUM arguments:');
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(10.12,14,20, 77));
console.log('===============');
// Memoization
let cache = {};
function memoization(func){
    return function(){
        const key = func.name + [].join.call(arguments);//method borrowing from Array
        if(cache[key]){
            console.log('from cache:');
            return cache[key];
        } else {
            const value = func.apply(null, arguments);

            cache[key] = value;
            return value;
        }
    }
}

function multiply(x, y){
    return x * y;
}
console.log('Memoization:');
console.log(memoization(multiply)(1 ,2)); // вычислено
console.log(memoization(multiply)(1 ,3)); // вычислено
console.log(memoization(multiply)(1 ,2)); // взято из кеша
console.log(memoization(sum)(1 ,3, 4));  // вычислено
console.log(memoization(sum)(10));  // вычислено
console.log(memoization(sum)(10));  // взято из кеша
console.log('===============');
