export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;

export const PAUSED_CLASS = 'paused';

export const SKIER_CRASH = 'skierCrash';
export const SKIER_LEFT = 'skierLeft';
export const SKIER_LEFTDOWN = 'skierLeftDown';
export const SKIER_DOWN = 'skierDown';
export const SKIER_RIGHTDOWN = 'skierRightDown';
export const SKIER_RIGHT = 'skierRight';
export const SKIER_JUMP_1 = 'skierJump1';
export const SKIER_JUMP_2 = 'skierJump2';
export const SKIER_JUMP_3 = 'skierJump3';
export const SKIER_JUMP_4 = 'skierJump4';
export const SKIER_JUMP_5 = 'skierJump5';
export const TREE = 'tree';
export const TREE_CLUSTER = 'treeCluster';
export const ROCK1 = 'rock1';
export const ROCK2 = 'rock2';
export const RAMP = 'ramp';
export const PAUSE_MUSIC = 'pauseMusic';

export const SKIER_STARTING_SPEED = 10;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;
export const SKIER_JUMP_SPEED_MODIFIER = 1.2;

export const JUMP_FRAMES = 20;
export const RAMP_FRAMES = 60;

export const ASSETS = {
    [SKIER_CRASH]: 'img/skier_crash.png',
    [SKIER_LEFT]: 'img/skier_left.png',
    [SKIER_LEFTDOWN]: 'img/skier_left_down.png',
    [SKIER_DOWN]: 'img/skier_down.png',
    [SKIER_RIGHTDOWN]: 'img/skier_right_down.png',
    [SKIER_RIGHT]: 'img/skier_right.png',
    [SKIER_JUMP_1]: 'img/skier_jump_1.png',
    [SKIER_JUMP_2]: 'img/skier_jump_2.png',
    [SKIER_JUMP_3]: 'img/skier_jump_3.png',
    [SKIER_JUMP_4]: 'img/skier_jump_4.png',
    [SKIER_JUMP_5]: 'img/skier_jump_5.png',
    [TREE]: 'img/tree_1.png',
    [TREE_CLUSTER]: 'img/tree_cluster.png',
    [ROCK1]: 'img/rock_1.png',
    [ROCK2]: 'img/rock_2.png',
    [RAMP]: 'img/jump_ramp.png'
};

export const AUDIO = {
    [PAUSE_MUSIC]: 'audio/battletoads-pause-music.mp3'
};

export const SKIER_DIRECTIONS = {
    NONE: 0,
    LEFT: 1,
    LEFT_DOWN: 2,
    DOWN: 3,
    RIGHT_DOWN: 4,
    RIGHT: 5,
};

export const SKIER_DIRECTION_ASSET = {
    [SKIER_DIRECTIONS.LEFT]: SKIER_LEFT,
    [SKIER_DIRECTIONS.LEFT_DOWN]: SKIER_LEFTDOWN,
    [SKIER_DIRECTIONS.DOWN]: SKIER_DOWN,
    [SKIER_DIRECTIONS.RIGHT_DOWN]: SKIER_RIGHTDOWN,
    [SKIER_DIRECTIONS.RIGHT]: SKIER_RIGHT,
};

export const SKIER_STATES = {
    CRASHED: 0,
    JUMPING: 1,
    MOVING: 2,
    RAMPING: 3,
    STANDING: 4
};

export const SKIER_STATES_ASSET = {
    [SKIER_STATES.CRASHED]: SKIER_CRASH,
    [SKIER_STATES.JUMPING]: SKIER_JUMP_1,
    [SKIER_STATES.RAMPING]: SKIER_JUMP_1,
};

export const KEYS = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    SPACE: 32,
    P: 80
};