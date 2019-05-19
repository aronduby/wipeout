import { BaseState } from "./BaseState";
import * as Constants from "../../Constants";

export class Caught extends BaseState {

    enter() {
        this.skier.direction = Constants.SKIER_DIRECTIONS.NONE;
        this.skier.updateAsset(Constants.SKIER_STATES_ASSET[Constants.SKIER_STATES.CAUGHT]);
    }

}