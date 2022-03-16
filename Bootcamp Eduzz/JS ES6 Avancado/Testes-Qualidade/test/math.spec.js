//npm init -y
//mocha no test do package.json
//mkdir test
//npm run test
//npm i --save-dev chai
//npm i --save-dev mocha
const assert = require('assert');
const Math = require('../math.js');
const expect = require('chai').expect;
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
});