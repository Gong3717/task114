const main = require('../main/main');
let expect = require('chai').expect;

describe(" gess-number",function(){
    it("get all correct answers",function(){
        let str = '1234';
        let result = main(str);
        expect(result).to.equal('4A0B');
    });
    it("get some correct answers",function(){
        let str = '4321';
        let result = main(str);
        expect(result).to.equal('0A4B');
    });
});
