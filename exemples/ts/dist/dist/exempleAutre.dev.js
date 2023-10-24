"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// namespace
var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MathOperations;

(function (MathOperations) {
  var Arithmetic;

  (function (Arithmetic) {
    function add(x, y) {
      return x + y;
    }

    Arithmetic.add = add;
  })(Arithmetic = MathOperations.Arithmetic || (MathOperations.Arithmetic = {}));

  function substract(x, y) {
    return x - y;
  }

  MathOperations.substract = substract;
})(MathOperations || (MathOperations = {})); // Utilisation du namespace


var sum = MathOperations.Arithmetic.add(3, 10); // decorateurs de classe

function readOnly(target, name) {
  Object.preventExtensions(target.prototype);
}

var Greeter =
/** @class */
function () {
  function Greeter(message) {
    this.greeting = message;
  }

  Greeter = __decorate([readOnly], Greeter);
  return Greeter;
}(); // decorateur de methode
// function Log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
//     let originalMethod = descriptor.value
//     descriptor.value = function(...args: any[]) {
//         console.log("Arguments:", args)
//         return originalMethod.apply(this, args)
//     }
// }
// class Calculator {
//     @Log
//     add(x: number, y: number): number {
//         return x + y
//     }
// }


function Deprecated(target, propertyKey) {
  console.warn(propertyKey + " is deprecated.");
}

var UserProfile =
/** @class */
function () {
  function UserProfile() {}

  Object.defineProperty(UserProfile.prototype, "email", {
    get: function get() {
      return this._email;
    },
    set: function set(val) {
      this._email = val;
    },
    enumerable: false,
    configurable: true
  });

  __decorate([Deprecated], UserProfile.prototype, "email");

  return UserProfile;
}(); // decorateur de propriete


function MaxLength(value) {
  return function (target, propertyKey) {
    var _val = target[propertyKey];

    var getter = function getter() {
      return _val;
    };

    var setter = function setter(newVal) {
      if (newVal.length > value) {
        _val = "";
        console.error("Error: the value's length exceeds the maximum length");
      } else {
        _val = newVal;
      }
    };

    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get: getter,
      set: setter
    });
  };
}

var Message =
/** @class */
function () {
  function Message(text) {
    this.text = text;
  }

  __decorate([MaxLength(10)], Message.prototype, "text");

  return Message;
}();

var message = new Message("Bonjour"); // var message2 = new Message("Aurevoir, merci.");

console.log(message.text); // console.log(message2.text);