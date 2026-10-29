// http 웹 서버 만들기
// const http = require('http');

// http.createServer((req, res) => {
//     res.write('<h1> hello, world! </h1>');
//     res.end();
// }).listen(3000);

// html 파일  전달
// const http = require('http');
// const fs = require('fs').promises;

// http.createServer((req, res) => {
//     fs.readFile('./index.html').then(data => {
//         res.end(data)
//     }).catch(err => {
//         console.err(err)
//         res.writeHead(400);
//         res.end(err.message);
//     })
// }).listen(3000);

// cookie 생성
// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         // 쿠키 생성
//         'Set-Cookie': 'c1=cookie1!',
//         'content-Type': 'text/html; charset=utf-8',
//     });
//     res.end('<h1> 쿠키가 생성되었습니다. </h1>');
// }).listen(3000);

// cookie 가져오기
// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Set-Cookie': 'id=1',
//         'Content-Type': 'text/html; charset=utf-8',
//     });

//     console.log(req.headers.cookie); // id = 1
//     res.end(`<h1>User ID is ${req.headers.cookie.split('=')[1]}</h1>`);
// }).listen(3000);

// req.url 가져오기
// const http = require('http');

// http.createServer((req, res) => {
//     console.log(req.url);
//     res.end('ok');
// }).listen(3000);

// query String 직접 파싱하기
const http = require('http');

http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        const qs = req.url.split('?')[1];
        const pairs = qs.split('&');

        const map = new Map();
        pairs.map(pair => {
            const s = pair.split('=');
            map.set(s[0], s[1]);
        });

        console.log;
    }
    res.end('ok');
}).listen(3000);


// form을 통해 body 데이터 받기
// const http = require('http');
// http.createServer((req, res) => {

//     if(req.method === 'GET') {
//         res.writeHead(200, {
//             'Content-Type': 'text/html',
//         })
//         res.end(`<form method="POST">
//             ID: <input type = "text" name="id" />
//             <br />
//             Password: <input type="text" name="password" />
//             <button>Submit</button>
//             </form>`);
//         return;
//     }

//     let buf = [];
//     req.on('data', chunk => {
//         console.log(chunk);
//         buf.push(chunk);
//     });

//     req.on('end', () => {
//         console.log(Buffer.concat(buf).toString());
//         res.end('ok');
//     });
// }).listen(3000);

