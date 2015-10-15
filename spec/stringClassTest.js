(function() {
  'use strict';
  describe('STRING CLASS', function() {

    describe('Tests for hasVowels() function', function() {
      it('Should return true for \'Teddy\'', function() {
        expect('Teddy'.hasVowels()).toBe(true);
      });
      it('Should return true for \'egg\'', function() {
        expect('egg'.hasVowels()).toBe(true);
      });
      it('Should return false for \'nymph\'', function() {
        expect('nymph'.hasVowels()).toBe(false);
      });
      it('Should return false for \'hymm\'', function() {
        expect('hymm'.hasVowels()).toBe(false);
      });
      it('Should return type boolean for \'Godson\'', function() {
        expect(typeof ('Godson'.hasVowels())).toBe('boolean');
      });
    });


    describe('Tests for toUpper() function', function() {
      it('Should return \'ANDELA IS AN AMAZING PLACE\'', function() {
        expect('andela is an amazing place'.toUpper()).toBe('ANDELA IS AN AMAZING PLACE');
      });
      it('Should return\'I LOVE MY IPHONE\'', function() {
        expect('I lOvE mY IphoNe'.toUpper()).toBe('I LOVE MY IPHONE');
      });
      it('Should return type string', function() {
        expect(typeof('Listening to Rudimental'.toUpper())).toBe('string');
      });
      it('Should return converted letters and symbols', function() {
        expect('this is REAlly me$#@up'.toUpper()).toBe('THIS IS REALLY ME$#@UP');
      });
    });


    describe('Tests for toLower() function', function() {
      it('Should return \'andela is an amazing place\'', function() {
        expect('ANDELA IS AN AMAZING PLACE'.toLower()).toBe('andela is an amazing place');
      });
      it('Should return\'i love my iphone\'', function() {
        expect('I lOVE mY IphoNe'.toLower()).toBe('i love my iphone');
      });
      it('Should return type string', function() {
        expect(typeof('Listening to Rudimental'.toLower())).toBe('string');
      });
      it('Should return only converted letters and not symbols', function() {
        expect('WE ARE THE @#$@ GENERATION #@$@!'.toLower()).toBe('we are the @#$@ generation #@$@!');
      });
    });


    describe('Tests for ucFirst() function', function() {
      it('Should return \'My Happiness Depends On You\'', function() {
        expect('My happiness depends on you'.ucFirst()).toBe('My Happiness Depends On You');
      });
      it('Should return \'Let The Bass Drop\'', function() {
        expect('let the bass drop'.ucFirst()).toBe('Let The Bass Drop');
      });
      it('Should datatype of string for the return value', function() {
        expect(typeof ('Testing is good'.ucFirst())).toEqual('string');
      });
    });


    describe('Tests for isQuestion() function', function() {
      it('Should return true for \'Is that your name?\'', function() {
        expect('Is that your name?'.isQuestion()).toBe(true);
      });
      it('Should return true for \'Wasn\'t that a lovely game? \'', function() {
        expect('Wasn\'t that a lovely game?'.isQuestion()).toBe(true);
      });
      it('Shoudl return false for \'Today is a lovely day.\'', function() {
        expect('Today is a lovely day.'.isQuestion()).toBe(false);
      });
      it('Should return false for \'He is a lazy son of b@#@$!!!\'', function() {
        expect('He is a lazy son of a b@#@$!!!'.isQuestion()).toBe(false);
      });
      it('Shoud return type boolean when the function is called', function() {
        expect(typeof('He said that he is lazy, did he?'.isQuestion())).toBe('boolean');
      });
    });


    describe('Tests for words() function', function() {
      it('Should return [\'Trumpets\',\'Playing\',\'In\',\'The\', \'Background\']', function() {
        expect('Trumpets Playing In The Background'.words()).toEqual(['Trumpets', 'Playing', 'In', 'The', 'Background']);
      });
      it('Should return [\'respect\', \'is\', \'like\', \'FOOD\']', function() {
        expect('respect is like FOOD'.words()).toEqual(['respect', 'is', 'like', 'FOOD']);
      });
      it('Should return object for typeof the returned value from the function ', function() {
        expect(typeof('This is crazy'.words())).toBe('object');
      });
      it('Should return true for instanceof the returned value as array', function() {
        expect('I like a deep thinker'.words() instanceof Array).toBe(true);
      });
      it('Should return only words and not symbols', function() {
        expect('Godson dogson @#$@'.words()).toEqual(['Godson', 'dogson']);
      });
    });


    describe('Tests for wordCount() function', function() {
      it('Shoud return 5 for "Keep it on the low".wordCount()', function() {
        expect('Keep it on the low'.wordCount()).toEqual(5);
      });
      it('Should return number for typeof of the returned value from the function', function() {
        expect(typeof('Two magicians'.wordCount())).toBe('number');
      });
    });


    describe('Tests for toCurrency() function', function() {
      it('Should return a datatype of type string', function() {
        expect(typeof ('1111.11'.toCurrency())).toBe('string');
      });
      it('Should return 345,242.54', function() {
        expect('345242.54'.toCurrency()).toBe('345,242.54');
      });
      it('Should return 78,896.890', function() {
        expect('78896.890'.toCurrency()).toBe('78,896.890');
      });
      it('Should return 7,990,808,723.78', function() {
        expect('7990808723.78'.toCurrency()).toBe('7,990,808,723.78');
      });
      it('Should return 1,000', function() {
        expect('1000'.toCurrency()).toBe('1,000');
      });
      it('Should return NaN for a datatype that can\'t be converted to a Number', function() {
        expect('Godson'.toCurrency()).toEqual(NaN);
      });
    });


    describe('Tests fromCurrency() function', function() {
      it('Should return datatype of type number', function() {
        expect(typeof ('98,897'.fromCurrency())).toBe('number');
      });
      it('Should return 99789.78', function() {
        expect('99,978.78'.fromCurrency()).toBe(99978.78);
      });
      it('Should return 897935.78', function() {
        expect('897,935.78'.fromCurrency()).toBe(897935.78);
      });
    });

  });
})();