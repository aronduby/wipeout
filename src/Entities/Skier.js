import * as Constants from "../Constants";
import { Entity } from "./Entity";
import { intersectTwoRects, Rect } from "../Core/Utils";
import { Crashed } from "./SkierStates/Crashed";
import { Jumping } from "./SkierStates/Jumping";
import { Moving } from "./SkierStates/Moving";
import { Standing } from "./SkierStates/Standing";
import { Ramping } from "./SkierStates/Ramping";
import { Caught } from "./SkierStates/Caught";

export class Skier extends Entity {
    assetName = Constants.SKIER_DOWN;

    direction = Constants.SKIER_DIRECTIONS.DOWN;
    speed = Constants.SKIER_STARTING_SPEED;

    constructor(x, y) {
        super(x, y);

        this.states = {
            [Constants.SKIER_STATES.CRASHED]: new Crashed(this),
            [Constants.SKIER_STATES.JUMPING]: new Jumping(this),
            [Constants.SKIER_STATES.MOVING]: new Moving(this),
            [Constants.SKIER_STATES.RAMPING]: new Ramping(this),
            [Constants.SKIER_STATES.STANDING]: new Standing(this),
            [Constants.SKIER_STATES.CAUGHT]: new Caught(this)
        };

        this.setState(Constants.SKIER_STATES.STANDING);
    }

    setDirection(direction) {
        this.direction = direction;
        this.updateAsset();
    }

    updateAsset(asset) {
        this.assetName = asset || Constants.SKIER_DIRECTION_ASSET[this.direction];
    }

    setState(key) {
        const prevStateKey = this.stateKey;
        this.stateKey = key;
        this.state = this.states[key];
        this.state.enter(prevStateKey);
    }

    tick() {
        this.state.tick();

        switch(this.direction) {
            case Constants.SKIER_DIRECTIONS.LEFT_DOWN:
                this.moveSkierLeftDown();
                break;
            case Constants.SKIER_DIRECTIONS.DOWN:
                this.moveSkierDown();
                break;
            case Constants.SKIER_DIRECTIONS.RIGHT_DOWN:
                this.moveSkierRightDown();
                break;
        }
    }

    moveSkierLeft() {
        this.x -= Constants.SKIER_STARTING_SPEED;
    }

    moveSkierLeftDown() {
        this.x -= this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER / this.state.speedModifier;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER / this.state.speedModifier;
    }

    moveSkierDown() {
        this.y += this.speed / this.state.speedModifier;
    }

    moveSkierRightDown() {
        this.x += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER / this.state.speedModifier;
        this.y += this.speed / Constants.SKIER_DIAGONAL_SPEED_REDUCER / this.state.speedModifier;
    }

    moveSkierRight() {
        this.x += Constants.SKIER_STARTING_SPEED;
    }

    moveSkierUp() {
        this.y -= Constants.SKIER_STARTING_SPEED;
    }

    keyLeft() {
        return this.state.left && this.state.left();
    }

    keyRight() {
        this.state.right();
    }

    keyUp() {
        this.state.up();
    }

    keyDown() {
        this.state.down();
    }

    keySpace() {
        this.state.space();
    }

    checkIfSkierHitObstacle(obstacleManager, assetManager) {
        const asset = assetManager.getAsset(this.assetName);
        const skierBounds = new Rect(
            this.x - asset.width / 2,
            this.y - asset.height / 2,
            this.x + asset.width / 2,
            this.y - asset.height / 4
        );

        const collision = obstacleManager.getObstacles().find((obstacle) => {
            const obstacleAsset = assetManager.getAsset(obstacle.getAssetName());
            const obstaclePosition = obstacle.getPosition();
            const obstacleBounds = new Rect(
                obstaclePosition.x - obstacleAsset.width / 2,
                obstaclePosition.y - obstacleAsset.height / 2,
                obstaclePosition.x + obstacleAsset.width / 2,
                obstaclePosition.y
            );

            return intersectTwoRects(skierBounds, obstacleBounds)
                && !(obstacle.jumpable && this.state.inTheAir);
        });

        if(collision) {
            this.setState(collision.collisionState);
        }
    };
}