var o = {
    a: 2,
    m: function(b) {
        return this.a + 1;
    }
};

var p = Object.create(o);
p.c = p.a;
p.a = 12;
p.d = Object.getPrototypeOf(p).a;
p.e = p.__proto__.a; // discouraged
console.log(p.c);
console.log(p.m());
console.log(p.d);
console.log(p.e);