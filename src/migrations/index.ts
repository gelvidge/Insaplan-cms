import * as migration_20260207_070124 from './20260207_070124';
import * as migration_20260409_120000 from './20260409_120000';
import * as migration_20260414_120000 from './20260414_120000';
import * as migration_20260414_130000 from './20260414_130000';
import * as migration_20260414_140000 from './20260414_140000';
import * as migration_20260414_150000 from './20260414_150000';
import * as migration_20260414_160000 from './20260414_160000';
import * as migration_20260414_170000 from './20260414_170000';
import * as migration_20260414_180000 from './20260414_180000';
import * as migration_20260415_080421 from './20260415_080421';
import * as migration_20260415_120000 from './20260415_120000';
import * as migration_20260415_130000 from './20260415_130000';
import * as migration_20260415_200000 from './20260415_200000';
import * as migration_20260415_210000 from './20260415_210000';

export const migrations = [
  {
    up: migration_20260207_070124.up,
    down: migration_20260207_070124.down,
    name: '20260207_070124',
  },
  {
    up: migration_20260409_120000.up,
    down: migration_20260409_120000.down,
    name: '20260409_120000',
  },
  {
    up: migration_20260414_120000.up,
    down: migration_20260414_120000.down,
    name: '20260414_120000',
  },
  {
    up: migration_20260414_130000.up,
    down: migration_20260414_130000.down,
    name: '20260414_130000',
  },
  {
    up: migration_20260414_140000.up,
    down: migration_20260414_140000.down,
    name: '20260414_140000',
  },
  {
    up: migration_20260414_150000.up,
    down: migration_20260414_150000.down,
    name: '20260414_150000',
  },
  {
    up: migration_20260414_160000.up,
    down: migration_20260414_160000.down,
    name: '20260414_160000',
  },
  {
    up: migration_20260414_170000.up,
    down: migration_20260414_170000.down,
    name: '20260414_170000',
  },
  {
    up: migration_20260414_180000.up,
    down: migration_20260414_180000.down,
    name: '20260414_180000',
  },
  {
    up: migration_20260415_080421.up,
    down: migration_20260415_080421.down,
    name: '20260415_080421',
  },
  {
    up: migration_20260415_120000.up,
    down: migration_20260415_120000.down,
    name: '20260415_120000',
  },
  {
    up: migration_20260415_130000.up,
    down: migration_20260415_130000.down,
    name: '20260415_130000'
  },
  {
    up: migration_20260415_200000.up,
    down: migration_20260415_200000.down,
    name: '20260415_200000'
  },
  {
    up: migration_20260415_210000.up,
    down: migration_20260415_210000.down,
    name: '20260415_210000'
  },
];
