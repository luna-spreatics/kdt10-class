function callPromise(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(name); // kim
            resolve(name);
        }, 1000);
    })
}

function backPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('back');
            resolve('back');
        }, 1000);
    })
}

function hellPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('callback hell');
        }, 1000);
    })
}

// 함수 호출
// callPromise('kim')
//     .then(function (name) {
//         console.log(`${name} 반가워!`); // kim 반가워!
//         return backPromise();
//     }).then(function (txt) {
//         console.log(`${txt}을 실행했구나!`); // back을 실행했구나!
//         return hellPromise();
//     }).then(function (msg) {
//         console.log(msg); // callback hell
//     })

// async/await 사용
async function exec() {
    const name = await callPromise('kim');
    console.log(`${name} 반가워!`);

    const txt = await backPromise();
    console.log(`${txt}을 실행했구나!`);

    const msg = await hellPromise();
    console.log(msg);
}

exec();