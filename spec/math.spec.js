require('src/math', function(math){
  describe('Math', function(){
    it('can add two numbers', function(){
      expect(math.add(1,2)).toBe(3);
    });
  });
});
