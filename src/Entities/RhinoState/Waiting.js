import { BaseState } from "./BaseState";
import * as Constants from "../../Constants";

export class Waiting extends BaseState {

    count = 0;

    enter() {
        this.count = 0;
    }

    tick() {
        if (this.count >= Constants.RHINO_DELAY) {
            this.rhino.setState(Constants.RHINO_STATES.CHASING);
        }

        this.count++;
    }

}