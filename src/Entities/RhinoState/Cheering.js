import { BaseState } from "./BaseState";
import * as Constants from "../../Constants";

export class Cheering extends BaseState {

    frame = 0;
    count = 0;
    cheerCycle = [Constants.RHINO_CHEER_1, Constants.RHINO_CHEER_2];

    enter() {
        this.frame = 0;
        this.count = 0;
        this.rhino.assetName = this.cheerCycle[0];
    }

    tick() {
        if (this.count !== 0
            && this.count % Constants.RHINO_ANIMATION_SPEED === 0
        ) {
            this.frame++;
            if (this.frame >= this.cheerCycle.length) {
                this.frame = 0;
            }

            this.rhino.assetName = this.cheerCycle[this.frame];
        }

        this.count++;
    }

}