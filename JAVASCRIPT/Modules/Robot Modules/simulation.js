// simulation.js
export function runRobot(state, robot, memory) { // Ejecuta el robot en el estado dado
    for (let turn = 0; ; turn++) {
        if (state.parcels.length === 0) {
            console.log(`Terminado en ${turn} turnos`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Movido a ${action.direction}`);
    }
}
export function countSteps(state, robot, memory) { // Cuenta los pasos hasta que se entreguen todos los paquetes
    for (let steps = 0; ; steps++) {
        if (state.parcels.length === 0) return steps;
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}
export function compareRobots(robot1, memory1, robot2, memory2, VillageState) { // Compara dos robots
    let total1 = 0, total2 = 0;
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        total1 += countSteps(state, robot1, memory1);
        total2 += countSteps(state, robot2, memory2);
    }
    console.log(`Robot 1 necesitó ${total1 / 100} pasos por tarea`);
    console.log(`Robot 2 necesitó ${total2 / 100} pasos por tarea`);
}
