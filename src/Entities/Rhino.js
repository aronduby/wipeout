import { Entity } from "./Entity";
import * as Constants from "../Constants";
import { intersectTwoRects, randomInt, Rect } from "../Core/Utils";
import { Cheering } from "./RhinoState/Cheering";
import { Waiting } from "./RhinoState/Waiting";
import { Eating } from "./RhinoState/Eating";
import { Chasing } from "./RhinoState/Chasing";

export class Rhino extends Entity {
    assetName = Constants.RHINO_DEFAULT;

    direction = Constants.SKIER_DIRECTIONS.NONE;
    speed = Constants.RHINO_SPEED;

    constructor(skier) {
        // start it above the top of the screen, but random spot in x
        super(
            randomInt(-(Constants.GAME_WIDTH / 2), Constants.GAME_WIDTH / 2),
            (-(Constants.GAME_HEIGHT/2) - 100)
        );

        this.skier = skier;

        this.states = {
            [Constants.RHINO_STATES.CHASING]: new Chasing(this),
            [Constants.RHINO_STATES.CHEERING]: new Cheering(this),
            [Constants.RHINO_STATES.EATING]: new Eating(this),
            [Constants.RHINO_STATES.WAITING]: new Waiting(this),
        };

        this.setState(Constants.RHINO_STATES.WAITING);
    }

    setState(key) {
        const prevStateKey = this.stateKey;
        this.stateKey = key;
        this.state = this.states[key];
        this.state.enter(prevStateKey);
    }

    tick() {
        this.state.tick();
    }

    checkIfRhinoHitSkier(assetManager) {
        const rhinoAsset = assetManager.getAsset(this.assetName);
        const rhinoBounds = new Rect(
            this.x - rhinoAsset.width / 2,
            this.y - rhinoAsset.height / 2,
            this.x + rhinoAsset.width / 2,
            this.y - rhinoAsset.height / 4
        );

        const skierAsset = assetManager.getAsset(this.skier.assetName);
        const skierBounds = new Rect(
            this.skier.x - skierAsset.width / 2,
            this.skier.y - skierAsset.height / 2,
            this.skier.x + skierAsset.width / 2,
            this.skier.y - skierAsset.height / 4
        );

        const caught = intersectTwoRects(rhinoBounds, skierBounds);
        if (caught) {
            this.skier.setState(Constants.SKIER_STATES.CAUGHT);
            this.setState(Constants.RHINO_STATES.EATING);
        }

        return caught;
    }

}