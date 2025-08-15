// graph.js
export const roads = [ // conexiones entre lugares
    "Casa de Alice-Casa de Bob", "Casa de Alice-Cabaña",
    "Casa de Alice-Oficina de Correos", "Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie", "Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete", "Casa de Grete-Granja",
    "Casa de Grete-Tienda", "Plaza del Mercado-Granja",
    "Plaza del Mercado-Oficina de Correos", "Plaza del Mercado-Tienda",
    "Plaza del Mercado-Ayuntamiento", "Tienda-Ayuntamiento"
];
export const mailRoute = [ // ruta del correo
    "Casa de Alice", "Cabaña", "Casa de Alice", "Casa de Bob",
    "Ayuntamiento", "Casa de Daria", "Casa de Ernie",
    "Casa de Grete", "Tienda", "Casa de Grete", "Granja",
    "Plaza del Mercado", "Oficina de Correos"
];
export function buildGraph(edges) { // Construye un grafo a partir de un conjunto de aristas
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
export function randomPick(array) { // Selecciona un elemento aleatorio de un array
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}
export function findRoute(graph, from, to) { // Encuentra una ruta en el grafo
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place === to) return route.concat(place);
            if (!work.some(w => w.at === place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}
export const roadGraph = buildGraph(roads); // Grafo de carreteras
