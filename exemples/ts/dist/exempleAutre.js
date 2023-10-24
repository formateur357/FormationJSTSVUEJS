"use strict";
// namespace
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MathOperations;
(function (MathOperations) {
    let Arithmetic;
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
})(MathOperations || (MathOperations = {}));
// Utilisation du namespace
let sum = MathOperations.Arithmetic.add(3, 10);
// decorateurs de classe
function readOnly(target) {
    Object.preventExtensions(target.prototype);
}
let Greeter = /** @class */ (() => {
    let Greeter = class Greeter {
        constructor(message) {
            this.greeting = message;
        }
    };
    Greeter = __decorate([
        readOnly
    ], Greeter);
    return Greeter;
})();
// decorateur de methode
function Log(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Arguments:", args);
        return originalMethod.apply(this, args);
    };
}
let Calculator = /** @class */ (() => {
    class Calculator {
        add(x, y) {
            return x + y;
        }
    }
    __decorate([
        Log
    ], Calculator.prototype, "add", null);
    return Calculator;
})();
function Deprecated(target, propertyKey) {
    console.warn(`${propertyKey} is deprecated.`);
}
let UserProfile = /** @class */ (() => {
    class UserProfile {
        constructor() {
            this._email = "";
        }
        get email() {
            return this._email;
        }
        set email(val) {
            this._email = val;
        }
    }
    __decorate([
        Deprecated
    ], UserProfile.prototype, "email", null);
    return UserProfile;
})();
// decorateur de propriete
function MaxLength(value) {
    return (target, propertyKey) => {
        const key = Symbol();
        const getter = () => {
            return this[key];
        };
        const setter = (newVal) => {
            if (newVal.length > value) {
                this[key] = undefined;
                console.error("Error: the value's length exceeds the maximum length");
            }
            else {
                this[key] = newVal;
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
let Message = /** @class */ (() => {
    class Message {
        constructor(text) {
            this.text = text;
        }
    }
    __decorate([
        MaxLength(10)
    ], Message.prototype, "text", void 0);
    return Message;
})();
let message1 = new Message("Bonjour");
let message2 = new Message("Aurevoir, merci.");
console.log(message1.text);
console.log(message2.text);
// decorateur
function PrintParam(target, methodName, paramIndex) {
    console.log(`Method: ${methodName}, Parameter: ${paramIndex}`);
}
let Task = /** @class */ (() => {
    class Task {
        execute(name) { }
    }
    __decorate([
        __param(0, PrintParam)
    ], Task.prototype, "execute", null);
    return Task;
})();
