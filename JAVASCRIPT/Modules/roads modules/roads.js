// roads.js
import { buildGraph } from "./graph.js";
const roads = [
    "Casa de Alice-Casa de Bob", "Casa de Alice-Cabaña",
    "Casa de Alice-Oficina de Correos", "Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie", "Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete", "Casa de Grete-Granja",
    "Casa de Grete-Tienda", "Plaza del Mercado-Granja",
    "Plaza del Mercado-Oficina de Correos", "Plaza del Mercado-Tienda",
    "Plaza del Mercado-Ayuntamiento", "Tienda-Ayuntamiento"
];
// Convertimos las cadenas "A-B" en arrays ["A", "B"]
const roadArray = roads.map(r => r.split("-"));
// Exportamos el grafo
export const roadGraph = buildGraph(roadArray);
