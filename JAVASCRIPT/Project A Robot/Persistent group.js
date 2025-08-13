class PGroup {
    constructor(members) {
        this.members = members;
    }

    has(value) {
        return this.members.includes(value);
    }

    add(value) {
        if (this.has(value)) return this;
        return new PGroup(this.members.concat([value]));
    }

    delete(value) {
        if (!this.has(value)) return this;
        return new PGroup(this.members.filter(m => m !== value));
    }

    static empty = new PGroup([]);
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(a.has("a")); // → true
console.log(b.has("a")); // → false
console.log(b.has("b")); // → true
console.log(a.has("b")); // → false