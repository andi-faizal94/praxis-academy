axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(error => console.log(error))