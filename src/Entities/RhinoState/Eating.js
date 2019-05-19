import { BaseState } from "./BaseState";
import * as Constants from "../../Constants";

export class Eating extends BaseState {

    count = 0;

    enter() {
        this.count = 0;
        this.animation = {
            [0]: () => this.rhino.assetName = Constants.RHINO_LIFT,
            [Constants.RHINO_ANIMATION_SPEED]: () => this.rhino.assetName = Constants.RHINO_LIFT_MOUTH_OPEN,
            [Constants.RHINO_ANIMATION_SPEED * 2]: () => this.rhino.assetName = Constants.RHINO_LIFT_EAT_1,
            [Constants.RHINO_ANIMATION_SPEED * 3]: () => this.rhino.assetName = Constants.RHINO_LIFT_EAT_2,
            [Constants.RHINO_ANIMATION_SPEED * 4]: () => this.rhino.setState(Constants.RHINO_STATES.CHEERING)
        };
    }

    tick() {
        if(this.animation[this.count]) {
            this.animation[this.count]();
        }

        this.count++;
    }

}