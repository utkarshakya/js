// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

// --- CREATING A PROMISE ---

/*
const promise1 = new Promise(function(resolve, reject){
    // Async Task, DB Calls, Cryptography, Network Tasks, etc
    setTimeout(function(){
        console.log("I'm Executed After A Second")
        resolve() // This tells the promise is resolved i.e. completed.
    }, 1000)
})
// .then is directly connected to resolve.
promise1.then(function(){
    console.log("Promise is completed")
})
*/


// WE CAN ALSO DO THE SAME LIKE THIS
/*
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("I'm Executed After A Second")
        resolve() // This tells the promise is resolved i.e. completed.
    }, 1000)
}).then(function(){
    console.log("Promise is completed")
})
*/


// PROMISES ALSO RETURNS VALUES
/*
const promise3 = new Promise(function(done, reject){
    setTimeout(function(){
        const records = [
            {id: 234, name: "Agatha Harknes", class: "Dark"},
            {id: 564, name: "Professor X", class: "Mutant"},
            {id: 814, name: "Black Panther", class: "Power"}
        ]
        done(records)
    }, 2000)
}).then(function(users){
    console.log(users)
})
// This is how we can also pass parameters while resolving the promise, also we can give any name to resolve and reject because they are also parameters.
*/


// CHAINING AND ERROR HANDLING USING PROMISE
/*
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true // make it false to see then chaining.
        if(!error){
            const records = [
                {id: 234, name: "Agatha Harknes", class: "Dark"},
                {id: 564, name: "Professor X", class: "Mutant"},
                {id: 814, name: "Black Panther", class: "Power"}
            ]
            resolve(records)
        }
        else{
            reject('Something went wrong.')
        }
        
    }, 1000)
})

promise4.then((user) => {
    // console.log(user[1].name)
    return user[0].name
}).then((name) => { // This is chaining.
    console.log(name)
}).catch(function(err){
    console.log(err)
}).finally(() => console.log('I always run ether the promise resolved or rejected.'))
*/


// WE CAN ALSO USE ASYNC AND AWAIT
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Utkarsh Shakya", password: '1234kka'})
        }
        else{
            reject('THERE IS SOME ERROR!')
        }
    }, 1000)
})
// async function consumePromise(){
//     const response = await promise5
//     console.log(response)
// }
// The above one runs perfect when there is no error, but we can not handle error directly this way.
// but we can use try and catch block to handle error here like the one given below.
async function consumePromise(){
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise()