function sayHello(name) {
    let string = `Hello, ${name}`
    return string;
}

console.log(sayHello('Pavel'))

function returnNumber(num) {
    return mass = [num - 1, num, num + 1];
}

console.log(returnNumber(5))

function getRes(num, times) {
    let str = '';
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    for (let i = 1; i <= times; i++) {
        if (times === i) {
            str += `${num * i}`
        } else {
            str += `${num * i}---`
        }
    }
    return str;
}


console.log(getRes(10, 5))
