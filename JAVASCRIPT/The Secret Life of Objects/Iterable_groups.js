class Group {
    constructor() {
        this._members = [];
    }
    add(value) {
        if (!this.has(value)) {
            this._members.push(value);
        }
    }
    delete(value) {
        this._members = this._members.filter(member => member !== value);
    }
    has(value) {
        return this._members.includes(value);
    }
    static from(iterable) {
        const group = new Group();
        for (const value of iterable) {
            group.add(value);
        }
        return group;
    }
    [Symbol.iterator]() {
        let index = 0;
        const members = this._members;
        return {
            next() {
                if (index < members.length) {
                    return { value: members[index++], done: false };
                }
                return { done: true };
            }
        };
    }
}
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c
