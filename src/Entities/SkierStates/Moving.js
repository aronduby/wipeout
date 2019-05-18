import * as Constants from "../../Constants";
import { BaseState } from "./BaseState";

export class Moving extends BaseState {

    left() {
        this.skier.setDirection(this.skier.direction - 1);
        if (this.skier.direction === Constants.SKIER_DIRECTIONS.LEFT) {
            this.skier.setState(Constants.SKIER_STATES.STANDING);
        }
    }

    right() {
        this.skier.setDirection(this.skier.direction + 1);
        if (this.skier.direction === Constants.SKIER_DIRECTIONS.RIGHT) {
            this.skier.setState(Constants.SKIER_STATES.STANDING);
        }
    }

    down() {
        this.skier.setDirection(Constants.SKIER_DIRECTIONS.DOWN);
    }

    space() {
        this.skier.setState(Constants.SKIER_STATES.JUMPING);
    }

}
