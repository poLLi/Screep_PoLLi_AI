import { roleHarvester } from './roles/harvester';

// Main loop for Screeps bot
export function loop(): void {
    console.log('PoLLi AI Bot - Tick:', Game.time);

    // Clean up memory of dead creeps
    for (const name in Memory.creeps) {
        if (!(name in Game.creeps)) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    // Basic creep management
    const harvesters = Object.values(Game.creeps).filter((creep) => creep.memory.role === 'harvester');

    if (harvesters.length < 2) {
        const newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);

        for (const spawnName in Game.spawns) {
            const spawn = Game.spawns[spawnName];
            spawn.spawnCreep([WORK, CARRY, MOVE], newName, 
                { memory: { role: 'harvester' } });
            break;
        }
    }

    // Run creep logic
    for (const name in Game.creeps) {
        const creep = Game.creeps[name];
        runCreep(creep);
    }
}

function runCreep(creep: Creep): void {
    if (creep.memory.role === 'harvester') {
        roleHarvester.run(creep);
    }
}
