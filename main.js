// Sync Example
// alert('working synchronously!!')
// console.log('hello after sometime...');

// Async Example

// function runAfterSometime() {
//     setTimeout(function () {
//         console.log('run after 2 seconds...');
//     }, 2000)
// }
// runAfterSometime()
// console.log('print earlier b/c of funtion runAfterSometime is taking time of 2 sec to execute..');

// Call Back
function runAfter2Sec(cb) { // cb is a callBack parameter of the function toBeRun, in short toBeRun is a call back funtion..
    setTimeout(function () {
        console.log('DONE');
        cb()
    }, 2000)
}

function toBeRun() {
    console.log('Yes, it is done!!');
}

runAfter2Sec(toBeRun)
console.log('hhello');

