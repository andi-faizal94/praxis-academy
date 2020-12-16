const axios = require('axios').default
    // promise
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res.data))
    // async/await
async function getData() {
    const req = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(req.data);
}
getData();