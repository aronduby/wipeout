import { BaseState } from "./BaseState";
import * as Constants from "../../Constants";

export class Chasing extends BaseState {
    count = 0;

    frame = 0;
    leftCycle = [Constants.RHINO_RUN_LEFT, Constants.RHINO_RUN_LEFT_2];
    rightCycle = [Constants.RHINO_RUN_RIGHT, Constants.RHINO_RUN_RIGHT_2];

    enter() {
        this.count = 0;
    }

    tick() {
        this.setDirection();

        this.rhino.assetName = this.animationCycle[this.frame];

        if (this.count !== 0
            && this.count % (Constants.RHINO_ANIMATION_SPEED - 5) === 0
        ) {
            this.frame++;
            if (this.frame >= this.animationCycle.length) {
                this.frame = 0;
            }
        }

        this.count++;
    }

    setDirection() {
        // if it's within the x buffer zone
        // keep the animation as left (to match the eat animation)
        // set the x to the same
        const skierX = this.rhino.skier.x;
        const rhinoX = this.rhino.x;
        const rhinoMinX = rhinoX - Constants.RHINO_X_BUFFER;
        const rhinoMaxX = rhinoX + Constants.RHINO_X_BUFFER;

        if (rhinoMinX <= skierX && skierX <= rhinoMaxX) {
            this.rhino.x = skierX;
            this.animationCycle = this.leftCycle;
        }
        else if (skierX < rhinoX) {
            this.animationCycle = this.leftCycle;
            this.rhino.x -= Constants.RHINO_SPEED;
        }
        else {
            this.animationCycle = this.rightCycle;
            this.rhino.x += Constants.RHINO_SPEED;
        }

        if (this.rhino.skier.y > this.rhino.y) {
            this.rhino.y += Constants.RHINO_SPEED;
        }
    }
}