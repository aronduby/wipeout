import * as Constants from "../../Constants";
import { Entity } from "../Entity";
import { randomInt } from '../../Core/Utils';

const assetTypes = [
    Constants.TREE,
    Constants.TREE_CLUSTER,
    Constants.ROCK1,
    Constants.ROCK2,
    Constants.RAMP
];

const jumpableAssets = {
    [Constants.TREE]: false,
    [Constants.TREE_CLUSTER]: false,
    [Constants.ROCK1]: true,
    [Constants.ROCK2]: true,
    [Constants.RAMP]: true
};

const collisionStates = {
    [Constants.TREE]: Constants.SKIER_STATES.CRASHED,
    [Constants.TREE_CLUSTER]: Constants.SKIER_STATES.CRASHED,
    [Constants.ROCK1]: Constants.SKIER_STATES.CRASHED,
    [Constants.ROCK2]: Constants.SKIER_STATES.CRASHED,
    [Constants.RAMP]: Constants.SKIER_STATES.RAMPING
};

export class Obstacle extends Entity {
    jumpable = false;
    collisionState = Constants.SKIER_STATES.CRASHED;

    constructor(x, y) {
        super(x, y);

        const assetIdx = randomInt(0, assetTypes.length - 1);
        this.assetName = assetTypes[assetIdx];
        this.jumpable = jumpableAssets[this.assetName];
        this.collisionState = collisionStates[this.assetName];
    }
}