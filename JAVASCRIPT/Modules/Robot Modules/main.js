// main.js
import { VillageState } from "./village.js";
import { routeRobot, goalOrientedRobot } from "./robots.js";
import { compareRobots } from "./simulation.js";
compareRobots(routeRobot, [], goalOrientedRobot, [], VillageState); 
