#!/usr/bin/node

const http  = require('http'),
      url  = require('url');
const log = console.log;
const qs = require('querystring');

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpversion}`);
  console.log(req.headers);
  console.log();

  var addr = url.parse(req.url);
  var rect = qs.parse(addr.query);
  
  var result = {
      'area': Number(rect.width) * Number(rect.height),
      'perimeter': 2 * (Number(rect.width) + Number(rect.height))
  }
  console.log(rect.weight,rect.height);
  //res.end('{"code":200,"reason":"请求成功","result":{"area"}}');
  res.end(JSON.stringify(result));//变成字符串
}).listen(8080);
