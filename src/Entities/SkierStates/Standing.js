import * as Constants from "../../Constants";
import { BaseState } from "./BaseState";

export class Standing extends BaseState {

    enter() {
        if (this.skier.direction !== Constants.SKIER_DIRECTIONS.LEFT &&
            this.skier.direction !== Constants.SKIER_DIRECTIONS.RIGHT
        ) {
            this.skier.setDirection(Constants.SKIER_DIRECTIONS.LEFT);
        }
    }

    left() {
        this.skier.setDirection(Constants.SKIER_DIRECTIONS.LEFT);
        this.skier.moveSkierLeft();
    }

    right() {
        this.skier.setDirection(Constants.SKIER_DIRECTIONS.RIGHT);
        this.skier.moveSkierRight();
    }

    up() {
        this.skier.moveSkierUp();
    }

    down() {
        this.skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
        this.skier.setState(Constants.SKIER_STATES.MOVING);
    }

    space() {
        this.skier.setState(Constants.SKIER_STATES.JUMPING);
    }

}
