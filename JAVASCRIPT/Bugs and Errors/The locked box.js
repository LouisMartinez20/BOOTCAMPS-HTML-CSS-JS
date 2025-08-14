'use strict';
const box = new class {
    locked = true;
    #content = [];
    unlock() { this.locked = false; }
    lock() { this.locked = true; }
    get content() {
        if (this.locked) throw new Error("¡Cerrado con llave!");
        return this.#content;
    }
};
function withBoxUnlocked(body) {
    let locked = box.locked;
    if (locked) box.unlock();
    try {
        return body();
    } finally {
        if (locked) box.lock();
    }
}
withBoxUnlocked(() => {
    box.content.push("tesoro a la vista");
});
try {
    withBoxUnlocked(() => {
        throw new Error("¡Piratas en el horizonte! ¡Abortar!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(box.locked);
// → true