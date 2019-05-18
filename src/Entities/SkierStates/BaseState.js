export class BaseState {

    inTheAir = false;
    speedModifier = 1;

    constructor(skier) {
        this.skier = skier;
    }

    enter() {}

    tick() {}

    left() {}
    right() {}
    up() {}
    down() {}
    space() {}

}