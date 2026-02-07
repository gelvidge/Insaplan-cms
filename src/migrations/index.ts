import * as migration_20260207_070124 from './20260207_070124';

export const migrations = [
  {
    up: migration_20260207_070124.up,
    down: migration_20260207_070124.down,
    name: '20260207_070124'
  },
];
