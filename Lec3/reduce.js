const arrayOfNumbers = [4,2,3,4];
const sum = arrayOfNumbers.reduce((accumulator,currentValue) => {
    return accumulator + currentValue ;
});

console.log(sum);