

var http = require('http');
let body = { 'email': 'jee', 'password': 'jee' }
http.request('http://localhost:3000/register', body, (err) => {

    if (err) {
        console.log('error')
    }
    else {
        console.log('success');
    }
});