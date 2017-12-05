const main = require('../main/main');
let expect = require('chai').expect;

describe(" gess-number",function(){
    it("get all correct answers",function(){
        let str = '1234';
        let result = main(str);
        expect(result).to.equal('4A0B');
    });
    it("get all correct numbers but wrong station",function(){
        let str = '4321';
        let result = main(str);
        expect(result).to.equal('0A4B');
    });
    it("get two correct numbers and correct station",function(){
        let str = '5634';
        let result = main(str);
        expect(result).to.equal('2A0B');
    });
    it("get all correct numbers but only two correct station",function(){
        let str = '1243';
        let result = main(str);
        expect(result).to.equal('2A2B');
    });
});
