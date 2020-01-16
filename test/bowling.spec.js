const assert = require("chai").assert;
const Bowling=require("../src/bowling");


describe("bowling", function(){
    it('should be a function', function() {
        assert.isFunction(Bowling);
      });

     it('should be a Object', function() {
        const bowling= new Bowling();
        assert.isObject(bowling);
      });

      it('should be a roll return a number of frames', function() {
        const bowling= new Bowling();
        assert.equal(bowling.frames,10);
      });

      it('should be one array', function() {
        const bowling= new Bowling();
        assert.isArray(bowling.frame);
      });


      it.skip('should be a roll return my frame', function() {
        const bowling= new Bowling();
        bowling.roll(5);
        bowling.roll(3);
        assert.deepEqual(bowling.frame, [5,3]);
      });

      it('should be a fourth roll is in a new frame', function() {
        const bowling= new Bowling();
        bowling.roll(5);
        bowling.roll(3);
        bowling.roll(3);
        bowling.roll(3);
        assert.deepEqual(bowling.listFrame, [[5,3][3,3]]);
      });




    
});