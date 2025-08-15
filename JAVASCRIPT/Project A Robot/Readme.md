

## Descripción

Se implementan y comparan distintos algoritmos de robots para analizar su eficiencia resolviendo tareas específicas, como la entrega de paquetes en una aldea. El objetivo es medir y optimizar la cantidad de pasos requeridos para completar cada tarea.

---

## Funciones Principales

### 1. Medir el rendimiento de un robot (`compareRobots`) en Measuring a robot

Esta función compara el desempeño de dos robots distintos, calculando cuántos pasos requieren en promedio para completar la misma tarea a lo largo de 100 simulaciones.

```javascript
function compareRobots(robot1, memory1, robot2, memory2) {
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        total1 += countSteps(state, robot1, memory1);
        total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 necesitó ${total1 / 100} pasos por tarea`);
    console.log(`Robot 2 necesitó ${total2 / 100} pasos por tarea`);
}
```

**Parámetros:**
- `robot1`, `robot2`: Algoritmos de los robots a comparar.
- `memory1`, `memory2`: Memorias iniciales de cada robot.

**Salida:**  
Imprime en consola el promedio de pasos necesarios para cada robot.

---

### 2. Robot eficiente (`improvedRobot`) en Robot efficiency

Este robot implementa una estrategia para optimizar el número de pasos necesarios para entregar todos los paquetes, eligiendo siempre la ruta más corta al siguiente destino relevante.

```javascript
function improvedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let routes = parcels.map(parcel => {
            if (parcel.place != place) {
                return { route: findRoute(roadGraph, place, parcel.place), pickUp: true };
            } else {
                return { route: findRoute(roadGraph, place, parcel.address), pickUp: false };
            }
        });
        route = routes.reduce((a, b) => (a.route.length <= b.route.length ? a : b)).route;
    }
    return { direction: route[0], memory: route.slice(1) };
}
```

**Descripción:**  
- El robot analiza todos los paquetes pendientes y calcula la ruta más corta ya sea para recoger o entregar cada paquete.
- Siempre selecciona la ruta óptima disponible en ese momento.




