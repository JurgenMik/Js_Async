// async keyword declares the async function and is in most cases embedded with await
// enables asynchronous behaviour, simplifies explicit promise handling
// coupled with API

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

// declaring an async function with await expression
async function asyncCall() {
    console.log('calling');
    // suspends execution until the promise is resolved
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

// invoking the async func
asyncCall();