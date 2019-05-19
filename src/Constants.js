export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;

export const PAUSED_CLASS = 'paused';
export const BLANK = 'blank';
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
export const RHINO_DEFAULT = 'rhinoDefault';
export const RHINO_RUN_LEFT = 'rhinoRunLeft';
export const RHINO_RUN_LEFT_2 = 'rhinoRunLeft2';
export const RHINO_RUN_RIGHT = 'rhinoRunRight';
export const RHINO_RUN_RIGHT_2 = 'rhinoRunRight2';
export const RHINO_LIFT = 'rhinoLeft';
export const RHINO_LIFT_MOUTH_OPEN = 'rhinoLiftMouthOpen';
export const RHINO_LIFT_EAT_1 = 'rhinoLiftEat1';
export const RHINO_LIFT_EAT_2 = 'rhinoLiftEat2';
export const RHINO_CHEER_1 = 'rhinoLiftEat3';
export const RHINO_CHEER_2 = 'rhinoLiftEat4';

export const SKIER_STARTING_SPEED = 10;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.35;
export const SKIER_JUMP_SPEED_MODIFIER = 1.1;

export const RHINO_DELAY = 500;
export const RHINO_SPEED = 9.8;
export const RHINO_ANIMATION_SPEED = 15;
export const RHINO_X_BUFFER = 30;

export const JUMP_FRAMES = 20;
export const RAMP_FRAMES = 60;

export const ASSETS = {
    [BLANK]: require('../img/blank.png'),
    [SKIER_CRASH]: require('../img/skier_crash.png'),
    [SKIER_LEFT]: require('../img/skier_left.png'),
    [SKIER_LEFTDOWN]: require('../img/skier_left_down.png'),
    [SKIER_DOWN]: require('../img/skier_down.png'),
    [SKIER_RIGHTDOWN]: require('../img/skier_right_down.png'),
    [SKIER_RIGHT]: require('../img/skier_right.png'),
    [SKIER_JUMP_1]: require('../img/skier_jump_1.png'),
    [SKIER_JUMP_2]: require('../img/skier_jump_2.png'),
    [SKIER_JUMP_3]: require('../img/skier_jump_3.png'),
    [SKIER_JUMP_4]: require('../img/skier_jump_4.png'),
    [SKIER_JUMP_5]: require('../img/skier_jump_5.png'),
    [TREE]: require('../img/tree_1.png'),
    [TREE_CLUSTER]: require('../img/tree_cluster.png'),
    [ROCK1]: require('../img/rock_1.png'),
    [ROCK2]: require('../img/rock_2.png'),
    [RAMP]: require('../img/jump_ramp.png'),
    [RHINO_DEFAULT]: require('../img/rhino_default.png'),
    [RHINO_RUN_LEFT]: require('../img/rhino_run_left.png'),
    [RHINO_RUN_LEFT_2]: require('../img/rhino_run_left_2.png'),
    [RHINO_RUN_RIGHT]: require('../img/rhino_run_right.png'),
    [RHINO_RUN_RIGHT_2]: require('../img/rhino_run_right_2.png'),
    [RHINO_LIFT]: require('../img/rhino_lift.png'),
    [RHINO_LIFT_MOUTH_OPEN]: require('../img/rhino_lift_mouth_open.png'),
    [RHINO_LIFT_EAT_1]: require('../img/rhino_lift_eat_1.png'),
    [RHINO_LIFT_EAT_2]: require('../img/rhino_lift_eat_2.png'),
    [RHINO_CHEER_1]: require('../img/rhino_lift_eat_3.png'),
    [RHINO_CHEER_2]: require('../img/rhino_lift_eat_4.png'),
};

export const AUDIO = {
    [PAUSE_MUSIC]: require('../audio/battletoads-pause-music.mp3')
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
    STANDING: 4,
    CAUGHT: 5
};

export const SKIER_STATES_ASSET = {
    [SKIER_STATES.CRASHED]: SKIER_CRASH,
    [SKIER_STATES.JUMPING]: SKIER_JUMP_1,
    [SKIER_STATES.RAMPING]: SKIER_JUMP_1,
    [SKIER_STATES.CAUGHT]: BLANK
};

export const RHINO_STATES = {
    CHASING: 0,
    CHEERING: 1,
    EATING: 2,
    WAITING: 4
};

export const KEYS = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    SPACE: 32,
    P: 80
};