import * as Constants from "../../Constants";
import { BaseState } from "./BaseState";

export class Jumping extends BaseState {
    inTheAir = true;
    speedModifier = Constants.SKIER_JUMP_SPEED_MODIFIER;
    jumpLength = Constants.JUMP_FRAMES;

    count = 0;
    trickCount = 0;

    activeTrick = null;

    enter(previousStateKey) {
        this.previousStateKey = previousStateKey;
        this.previousDirection = this.skier.direction;
        this.activeTrick = null;
        this.count = 0;
        this.trickCount = 0;
        this.tick();
    }

    tick() {
        this.handleTrick();

        switch(this.count) {
            case 0:
                this.skier.updateAsset(Constants.SKIER_STATES_ASSET[Constants.SKIER_STATES.JUMPING]);
                break;

            case this.jumpLength:
                if (this.activeTrick) {
                    this.skier.setState(Constants.SKIER_STATES.CRASHED);
                } else {
                    this.skier.setDirection(this.previousDirection);
                    this.skier.setState(this.previousStateKey);
                }
                break;
        }

        this.count++;
    }

    handleTrick() {
        if (!this.activeTrick) return true;

        if(this.activeTrick[this.trickCount]) {
            this.activeTrick[this.trickCount]();
        }

        this.trickCount++;
    }

    up() {
        this.activeTrick = {
            0: () => this.skier.updateAsset(Constants.SKIER_JUMP_1),
            10: () => this.skier.updateAsset(Constants.SKIER_JUMP_2),
            20: () => this.skier.updateAsset(Constants.SKIER_JUMP_3),
            30: () => this.skier.updateAsset(Constants.SKIER_JUMP_4),
            40: () => {
                this.skier.updateAsset(Constants.SKIER_JUMP_5);
                this.activeTrick = null;
            },
        }
    }

    down() {
        this.activeTrick = {
            0: () => this.skier.updateAsset(Constants.SKIER_JUMP_5),
            10: () => this.skier.updateAsset(Constants.SKIER_JUMP_4),
            20: () => this.skier.updateAsset(Constants.SKIER_JUMP_3),
            30: () => this.skier.updateAsset(Constants.SKIER_JUMP_2),
            40: () => {
                this.skier.updateAsset(Constants.SKIER_JUMP_1);
                this.activeTrick = null;
            },
        }
    }



}