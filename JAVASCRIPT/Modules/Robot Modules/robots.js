// robots.js
import { mailRoute, roadGraph, randomPick, findRoute } from "./graph.js";
export function randomRobot(state) { // Robot que se mueve aleatoriamente
    return { direction: randomPick(roadGraph[state.place]) };
}
export function routeRobot(state, memory) { // Robot que sigue una ruta predefinida
    if (memory.length === 0) memory = mailRoute;
    return { direction: memory[0], memory: memory.slice(1) };
}
export function goalOrientedRobot({ place, parcels }, route) { // Robot orientado a objetivos
    if (route.length === 0) {
        let parcel = parcels[0];
        if (parcel.place !== place) {
            route = findRoute(roadGraph, place, parcel.place); // Encuentra la ruta hacia el lugar del paquete
        } else {
            route = findRoute(roadGraph, place, parcel.address); // Encuentra la ruta hacia la dirección del paquete
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}
