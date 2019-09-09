/////////////////////// VD-1 ///////////////////////
try {
    var b = 0;
    result = a / b;
} catch (ex) {
    console.log(ex.message); //=> a is not define

} finally { console.log('finally'); }

/////////////////////// VD-2 ///////////////////////
try {
    var a = 10;
    var b = 0;
    result = a / b;
    throw 'Error divided by 0';
} catch (ex) {
    console.log(ex); //=> Error divided by 0

} finally { console.log('finally'); }

/////////////////////// VD-3 ///////////////////////
try {
    var a = 10;
    var b = 0;
    result = a / b;
    throw {
        code: 101,
        message: 'Error division'
    }
} catch (ex) {
    console.log(ex.message);//=> Error division

} finally { console.log('finally'); }