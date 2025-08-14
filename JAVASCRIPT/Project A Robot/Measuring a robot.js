
const roads = [ // define las conexiones entre lugares
    "Casa de Alice-Casa de Bob", "Casa de Alice-Cabaña",
    "Casa de Alice-Oficina de Correos", "Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie", "Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete", "Casa de Grete-Granja",
    "Casa de Grete-Tienda", "Plaza del Mercado-Granja",
    "Plaza del Mercado-Oficina de Correos", "Plaza del Mercado-Tienda",
    "Plaza del Mercado-Ayuntamiento", "Tienda-Ayuntamiento"
];
const mailRoute = [ //define los lugares que entrega el correo
    "Casa de Alice", "Cabaña", "Casa de Alice", "Casa de Bob",
    "Ayuntamiento", "Casa de Daria", "Casa de Ernie",
    "Casa de Grete", "Tienda", "Casa de Grete", "Granja",
    "Plaza del Mercado", "Oficina de Correos"
];

function buildGraph(edges) { // construye un grafo a partir de las conexiones
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (from in graph) graph[from].push(to);
        else graph[from] = [to];
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
function randomPick(array) { // selecciona un elemento aleatorio de un array
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}
function findRoute(graph, from, to) { //implementa un algoritmo para buscar la ruta mas corta entre las conexiones 
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}

const roadGraph = buildGraph(roads); // construye el grafo de carreteras

class VillageState {
    constructor(place, parcels) { // representa el estado del pueblo
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) { // mueve el robot a una nueva ubicación
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
    static random(parcelCount = 5) { // genera un estado aleatorio del pueblo para los paquetes
        let parcels = [];
        for (let i = 0; i < parcelCount; i++) {
            let address = randomPick(Object.keys(roadGraph));
            let place;
            do {
                place = randomPick(Object.keys(roadGraph));
            } while (place == address);
            parcels.push({ place, address });
        }
        return new VillageState("Oficina de Correos", parcels);
    }
}

function randomRobot(state) { // robot que se mueve aleatoriamente
    return { direction: randomPick(roadGraph[state.place]) };
}
function routeRobot(state, memory) { // sigue una ruta predefinida
    if (memory.length == 0) memory = mailRoute;
    return { direction: memory[0], memory: memory.slice(1) };
}
function goalOrientedRobot({ place, parcels }, route) { //usa busquda de rutas optimas 
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}

function runRobot(state, robot, memory) { // ejecuta el robot en el estado dado
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Terminado en ${turn} turnos`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Movido a ${action.direction}`);
    }
}
function countSteps(state, robot, memory) { //cuenta los pasos dados por el robot
    for (let steps = 0; ; steps++) {
        if (state.parcels.length == 0) return steps;
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}
function compareRobots(robot1, memory1, robot2, memory2) { //compara el rendimiento del robot
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        total1 += countSteps(state, robot1, memory1);
        total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 nesecito ${total1 / 100} pasos por tarea`);
    console.log(`Robot 2 nesecito ${total2 / 100} pasos por tarea`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
