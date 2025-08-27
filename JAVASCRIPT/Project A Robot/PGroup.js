class PGroup {
  #members;
  constructor(members) {
    this.#members = members;
  }
  // Agregar un valor al grupo (si no existe)
  add(value) {
    // Verificar si el valor ya existe 
    for (let member of this.#members) {
      if (member === value) {
        return this; // Ya existe, retornar el mismo grupo
      }
    }
    // Crear un nuevo array con el valor agregado
    const newMembers = [];
    for (let member of this.#members) {
      newMembers.push(member);
    }
    newMembers.push(value);
    return new PGroup(newMembers);
  }
  // Eliminar un valor del grupo (si existe)
  delete(value) {
    let found = false;
    // Verificar si el valor existe 
    for (let member of this.#members) {
      if (member === value) {
        found = true;
        break;
      }
    }
    if (!found) return this; // No existe, retornar el mismo grupo
    // Crear un nuevo array sin el valor eliminado
    const newMembers = [];
    for (let member of this.#members) {
      if (member !== value) {
        newMembers.push(member);
      }
    }
    return new PGroup(newMembers);
  }
  // Verificar si un valor existe en el grupo
  has(value) {
    for (let member of this.#members) {
      if (member === value) {
        return true;
      }
    }
    return false;
  }
  // Método estático para obtener un grupo vacío
  static empty = new PGroup([]);
}
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");
console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false