// village.js
import { roadGraph, randomPick } from "./graph.js";
export class VillageState { // Representa el estado del pueblo
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) { // mueve al robot a un nuevo destino
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels
                .map(p => {
                    if (p.place != this.place) return p;
                    return { place: destination, address: p.address };
                })
                .filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
    static random(parcelCount = 5) { // Genera un estado aleatorio del pueblo
        let parcels = [];
        for (let i = 0; i < parcelCount; i++) {
            let address = randomPick(Object.keys(roadGraph));
            let place;
            do {
                place = randomPick(Object.keys(roadGraph));
            } while (place === address);
            parcels.push({ place, address });
        }
        return new VillageState("Oficina de Correos", parcels);
    }
}
