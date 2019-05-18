import * as Constants from "../../Constants";
import { BaseState } from "./BaseState";

export class Crashed extends BaseState {

    enter() {
        this.skier.direction = Constants.SKIER_DIRECTIONS.NONE;
        this.skier.updateAsset(Constants.SKIER_STATES_ASSET[Constants.SKIER_STATES.CRASHED]);
    }

    left() {
        this.skier.setDirection(Constants.SKIER_DIRECTIONS.LEFT);
        this.skier.moveSkierLeft();
        this.skier.setState(Constants.SKIER_STATES.STANDING);
    }

    right() {
        this.skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT);
        this.skier.moveSkierRight();
        this.skier.setState(Constants.SKIER_STATES.STANDING);
    }

    up() {
        this.skier.moveSkierUp();
        this.skier.setState(Constants.SKIER_STATES.STANDING);
    }

    down() {
        this.skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
        this.skier.moveSkierDown();
        this.skier.setState(Constants.SKIER_STATES.MOVING);
    }



}
