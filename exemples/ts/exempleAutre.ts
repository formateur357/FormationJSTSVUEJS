// namespace

namespace MathOperations {
    export namespace Arithmetic {
        export function add(x: number, y: number): number {
            return x + y
        }
    }

    export function substract(x: number, y: number): number {
        return x - y
    }
}

// Utilisation du namespace

let sum = MathOperations.Arithmetic.add(3, 10)

// decorateurs de classe

function readOnly(target: Function) {
    Object.preventExtensions(target.prototype)
}

@readOnly
class Greeter {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
}

// decorateur de methode

function Log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value
    descriptor.value = function(...args: any[]) {
        console.log("Arguments:", args)
        return originalMethod.apply(this, args)
    }
}

class Calculator {
    @Log
    add(x: number, y: number): number {
        return x + y
    }
}


function Deprecated(target: any, propertyKey: any) {
    console.warn(`${propertyKey} is deprecated.`)
}

class UserProfile {
    private _email: string = ""

    @Deprecated
    get email(): string {
        return this._email
    }

    set email(val: string) {
        this._email = val
    }
}

// decorateur de propriete

function MaxLength(value: number) {
    return (target: any, propertyKey: any) => {
        const key = Symbol()

        const getter = () => {
            return this[key]
        }

        const setter = (newVal: string) => {
            if (newVal.length > value) {
                this[key] = undefined
                console.error("Error: the value's length exceeds the maximum length")
            } else {
                this[key] = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: getter,
            set: setter
        })
    }
}

class Message {
    @MaxLength(10)
    text: string

    constructor(text: string) {
        this.text = text
    }
}

let message1: Message = new Message("Bonjour")
let message2: Message = new Message("Aurevoir, merci.")
console.log(message1.text)
console.log(message2.text)

// decorateur

function PrintParam(target: object, methodName: string, paramIndex: number) {
    console.log(`Method: ${methodName}, Parameter: ${paramIndex}`)
}

class Task {
    execute(@PrintParam name: string) {}
}