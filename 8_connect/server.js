var connect = require('connect');
var http = require('http');

var app = connect();

// function doFirst(request, response, next) {
//     console.log('hello world');
//     next();
// }
//
// function doSecond(request, response, next) {
//     console.log('hello world2');
//     next();
// }
//
// app.use(doFirst);
// app.use(doSecond);

function profile(request, response){
    console.log('use is requesting profile')
}

function form(request, response){
    console.log('use is requesting form')
}

app.use('/profile', profile);
app.use('/form', form);

http.createServer(app).listen(8888);
console.log('Server is running');