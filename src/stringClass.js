(function() {
  'use strict';

  // Returns true if a a certain string contains a vowel through the use of Regular Expression
  String.prototype.hasVowels = function() {
    var vowels = /[aeiou]/;
    return vowels.test(this);
  };


  // Matches lowercase letters in a string and capitalizes them
  String.prototype.toUpper = function(n) {
     return this.replace(n || /[a-z]/g, function(char) {
       var upperCase =  char.charCodeAt() - 32;
       return String.fromCharCode(upperCase);
     });
  };


  // Matches uppercase letters in a string and lowercase them
  String.prototype.toLower = function() {
    return this.replace(/[A-Z]/g, function(char) {
      var lowerCase = char.charCodeAt() + 32;
      return String.fromCharCode(lowerCase);
    });
  };


  // Matches the first letter of a word in a string and capitalizes them
  String.prototype.ucFirst = function() {
    var firstLetterCaps = /\b([a-z])/g;
    return this.toUpper(firstLetterCaps);
  };


  // Checks if a certain string has a question mark symbol at the end of the input and return true if it has and vice versa
  String.prototype.isQuestion = function() {
    var question = /\?$/;
    return question.test(this);
  };


  // Matches the words in a string and returns the individual words as elements in an array
  String.prototype.words = function() {
    var listOfWords = /\w+/gi;
    return this.match(listOfWords);
  };


  // Returns the number of words in a partcular string
  String.prototype.wordCount = function() {
    return this.words().length;
  };


  // Inserts a comma(',') after every three places within a string to dentote written representation of a currency
  String.prototype.toCurrency = function() {
    var convertCurrency = /\B(?=(\d{3})+(?!\d))/g;
    if(Number(this)) {
      for(var i = 0, n = this.length; i < n; i++ ) {
        if(this[i] === '.') {
          var integerPart = this.substring(0, this.indexOf("."));
          var decimalPart = this.substring(this.indexOf(".") + 1, this.length);
          return integerPart.replace(convertCurrency, ",") + "." + decimalPart;
        }
        else {
          return this.replace(convertCurrency, ",");
        }
      }
    }
    else {
      return NaN;
    }
  };


  // Removes a comma(',') from a string and returns a Number to denote the literal numeric value of a currency
  String.prototype.fromCurrency = function() {
    var convertCurrency = /\,/;
    return Number(this.replace(convertCurrency, ""));
  };

})();