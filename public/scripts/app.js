'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name, location) {
    var age = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Person);

    this.name = name, this.location = location, this.age = age;
  }

  _createClass(Person, [{
    key: 'getGreeting',
    value: function getGreeting() {
      return 'Hi, ' + this.name + '! Your age is ' + this.age;
    }
  }]);

  return Person;
}();

var me = new Person('Andrew Lopez', 'Brooklyn', 39);
console.log(me.getGreeting());
var brother1 = new Person('Dierre Lopez', 'Seattle', 41);
console.log(brother1.getGreeting());
var brother2 = new Person('Chad Lopez', 'Brooklyn', 30);
console.log(brother2.getGreeting());
var father = new Person('Andrew Lopez Sr.', 'Brooklyn');
console.log(father.getGreeting());
