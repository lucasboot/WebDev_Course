//npm init -y
//mocha no test do package.json
//mkdir test
//npm run test
//npm i --save-dev chai
//npm i --save-dev mocha
const assert = require('assert');
const Math = require('../math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value=0;
describe('Math class', function() {
    //hooks antes de cada it, isto é executado
    this.beforeEach(function() {
        value = 5;
    });
    it('Sum two numbers', function(done){
        const math = new Math();
        math.sum(5, 5, value => {
            //assert.equal(value, 10);
            expect(value).to.equal(10);
            done();

        });
    });
    it('Multiply two numbers');
    it('Teste object', function() {
        const obj ={
            name: 'Lucas F'
        }
        expect(obj).to.have.property('name').equal('Lucas F');
    })
    it.only('Calls req with sum and index values', function(){
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math;
        math.printSum(req, res, 5, 5);
        expect(res.load.calledOnce).to.be.true;
    })
});