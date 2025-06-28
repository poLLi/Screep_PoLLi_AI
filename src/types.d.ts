// Global type declarations for Screeps
declare global {
    interface Memory {
        uuid: number;
        log: any;
    }

    interface CreepMemory {
        role: string;
        room?: string;
        working?: boolean;
    }

    namespace NodeJS {
        interface Global {
            log: any;
        }
    }
}

// This export is required to make this file a module
export {};