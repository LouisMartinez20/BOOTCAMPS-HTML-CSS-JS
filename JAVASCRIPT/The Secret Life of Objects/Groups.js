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
}
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
