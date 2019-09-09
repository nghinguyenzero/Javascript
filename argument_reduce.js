//ARGUMENTS
//reduce
function sum(...arguments) { 
    console.log(arguments); //[1, 2, 3, 4, 5, 3]
    return arguments.reduce(function (sum, num) {
        return sum + num;
    }, 100);
}
console.log('Result',sum(1, 2, 3, 4, 5, 3));


