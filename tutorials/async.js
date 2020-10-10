// Async await tutorial

async function f1() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => resolve('done on f1()!'), 2000);
    });
}

async function f2() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => resolve('done on f2()!'), 2000);
    });
}

f1().then((result) => {
        console.log(result);
        return f2();
    })
    .then((result) => {
        console.log(result);
    })
    .catch(err => console.log('err = ', err));

function output(input) {
    console.log('output = ', input);
}

function say() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('say');
        }, 2000);
    });
}

function hello(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value + ' hello.');
        }, 2000);
    });
}

async function f() {
    try {
        let msg = await say();
        let sentence = await hello(msg);

        return console.log(sentence);
    } catch (e) {
        console.log(e);
    }
}

f();