let cal = (x, y, type) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (x) !== 'number' || typeof (y) !== 'number') reject(new Error('Must be mumeric'));
            switch (type) {
                case '+': resolve(x + y);
                    break;
                case '*': resolve(x * y);
                    break;
                case '/': if (y === 0) reject(new Error('Divided by 0)'));
                    resolve(x / y);
                    break;
                default:
                    break;
            }
        }, 1000)
    }
    )
}

// let handle = async (a, b, c, d) => {
//     try {
//         let ab = await cal(a, b, '+');
//         let abc = await cal(ab, c, '*');
//         let abcd = await cal(abc, d, '/');
//         return Promise.resolve(abcd);
//     } catch (err) {
//         return Promise.reject(err);
//     }
// }

let handle = (a, b, c, d) => {
    return cal(a, b, '+')
        .then(res => cal(res, c, '*'))
        .then(res => cal(res, d, '/'))
}

handle(5, 2, 3, 3).then(data => console.log(data)).catch(err => console.log(err));
