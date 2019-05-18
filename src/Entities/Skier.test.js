import "babel-polyfill";
import { Skier } from "./Skier.js";
import * as Constants from "../Constants";

function crashedSkier() {
    const skier = new Skier(0,0);
    skier.setState(Constants.SKIER_STATES.CRASHED);

    return skier;
}

test('skier moves left after crash', () => {
    const skier = crashedSkier();
    const oldX = skier.x;
    skier.keyLeft();
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.LEFT);
    expect(skier.x).toBeLessThan(oldX);
});

test('skier moves right after crash', () => {
    const skier = crashedSkier();
    const oldX = skier.x;
    skier.keyRight();
    expect(skier.direction).toBe(Constants.SKIER_DIRECTIONS.RIGHT);
    expect(skier.x).toBeGreaterThan(oldX);
});