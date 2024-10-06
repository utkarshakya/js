// CHECK THIS MDN DOCS --> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

fetch('https://api.github.com/users/utkarshakya')
    .then((response) => {
        return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('E:', error))


// WE CAN ALSO USE ASYNC/AWAIT FUNCTION TO DO THE SAME.

// NOTE:
// 1. When fetch() is called in a program there is a new queue known as the Micro-Task Queue
// or Priority Queue or some say it as fetch queue is created.
// 2. Micro Task queue is different from Task Queue (which is created when functions
// like setTimeout() are called) and has more priority.
// 3. Task from these queue goes to call stake in the JS Engine.