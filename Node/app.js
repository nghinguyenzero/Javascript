
// var time = 0;
// var timer = setInterval(function () {
//     time += 2
//     console.log(time);
//     if (time > 7) {
//         clearInterval(timer);
//     }
// }, 1000);

//Nomal func : có thể  gọi thực thi trước khi viết func
sayGoodbye();
function sayGoodbye() {
    console.log('Goodbye');
}


//Func Express(thực thi phải sau khai báo)
function callFunc(func) {
    sayHello();
};
var sayHello = function () {
    console.log('Hello');
}

callFunc(sayHello);