const expect = require('chai').expect;

describe('天气预报接口测试套件',function(){
  it('石家庄的天气',function(){
    const http =  require('http');
    var addr = 'http://localhost:8080/rectangle?width=20&height=20';

    http.get(global.encodeURI(addr), (res) => {
        var result = '';
        res.on('data', (data) => {
              result += data.toString('utf8');
        });
        res.on('end', () => {
              var weather = JSON.parse(result);
              expect(weather.result).to.be.equal(200);
              console.log(weather);         
        });
    });
  });
})
