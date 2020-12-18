axios.get('https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js')
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
    })
    .catch(error => {
        console.log(error);
    })