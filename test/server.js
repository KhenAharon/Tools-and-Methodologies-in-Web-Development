var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app/server');
var should = chai.should();

chai.use(chaiHttp);

describe('Calculator-server#1', function() {    
  var state = null;
  it('(1) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "1"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('1');
        state = res.body;
        done();
      });
  });

  it('(2) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "+"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('1');
        state = res.body;
        done();
      });
  });
  
  it('(3) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "3"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('3');
        state = res.body;
        done();
      });
  });

  it('(4) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('4');
        state = res.body;
        done();
      });
  });

});

describe('Continuing testing like a boss', function() {    
  var state = null;
  it('(5) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "6"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('6');
        state = res.body;
        done();
      });
  });

  it('(6) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "6"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('66');
        state = res.body;
        done();
      });
  });
  
  it('(7) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "/"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('66');
        state = res.body;
        done();
      });
  });

  it('(8) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "3"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('3');
        state = res.body;
        done();
      });
  });

  it('(9) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('22');
        state = res.body;
        done();
      });
  });
});

describe('I must not fear', function() {    
  var state = null;
  it('(10) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "6"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('6');
        state = res.body;
        done();
      });
  });

  it('(11) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "0"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('60');
        state = res.body;
        done();
      });
  });
  
  it('(12) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('60');
        state = res.body;
        done();
      });
  });

  it('(13) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('60');
        state = res.body;
        done();
      });
  });
});

describe('Fear is the mindkiller', function() {    
  var state = null;
  it('(14) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "3"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('3');
        state = res.body;
        done();
      });
  });

  it('(15) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "*"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('3');
        state = res.body;
        done();
      });
  });
  
  it('(16) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "2"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('2');
        state = res.body;
        done();
      });
  });

  it('(17) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('6');
        state = res.body;
        done();
      });
  });

  it('(18) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('12');
        state = res.body;
        done();
      });
  });
});

describe('Fear is the little death that brings total obliteration.', function() {    
  var state = null;
  it('(19) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "7"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('7');
        state = res.body;
        done();
      });
  });

  it('(20) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "-"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('7');
        state = res.body;
        done();
      });
  });
  
  it('(21) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "8"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('8');
        state = res.body;
        done();
      });
  });

  it('(22) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('-1');
        state = res.body;
        done();
      });
  });

  it('(23) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "0"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('0');
        state = res.body;
        done();
      });
  });
});

describe('I will face my fear. I will let it go over me and through me.', function() {    
  var state = null;
  it('(24) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "0"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('0');
        state = res.body;
        done();
      });
  });

  it('(25) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "0"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('0');
        state = res.body;
        done();
      });
  });
  
  it('(26) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "-"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('0');
        state = res.body;
        done();
      });
  });

  it('(27) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "5"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('5');
        state = res.body;
        done();
      });
  });

  it('(28) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('-5');
        state = res.body;
        done();
      });
  });
});

describe('And when it has gone past ill turn the inner eye to see its path.', function() {    
  var state = null;
  it('(29) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "2"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('2');
        state = res.body;
        done();
      });
  });

  it('(30) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "/"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('2');
        state = res.body;
        done();
      });
  });
  
  it('(31) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "0"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('0');
        state = res.body;
        done();
      });
  });

  it('(32) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('ERROR');
        state = res.body;
        done();
      });
  });

});

describe('Where the fear has gone there will be nothing.', function() {    
  var state = null;
  it('(33) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "5"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('5');
        state = res.body;
        done();
      });
  });

  it('(34) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "5"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('55');
        state = res.body;
        done();
      });
  });
  
  it('(35) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('55');
        state = res.body;
        done();
      });
  });

  it('(36) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('55');
        state = res.body;
        done();
      });
  });

});

describe('Only I will remain.', function() {    
  var state = null;
  it('(37) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "7"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('7');
        state = res.body;
        done();
      });
  });

  it('(38) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "3"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('73');
        state = res.body;
        done();
      });
  });
  
  it('(39) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "+"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('73');
        state = res.body;
        done();
      });
  });

  it('(40) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "0"
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('0');
        state = res.body;
        done();
      });
  });
  it('(40) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('73');
        state = res.body;
        done();
      });
  });
  it('(40) Integration testing the post like a boss', function(done) {
    chai.request(server)
      .post('/calculate')
      .send({
        calculatorState: state,
        input: "="
        })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;     
        res.body.should.be.a('object');
        res.body.should.have.property('display');
        res.body.display.should.equal('73');
        state = res.body;
        done();
      });
  });
});
