import * as Constants from "../Constants";
import { AssetManager } from "./AssetManager";
import { Canvas } from './Canvas';
import { Skier } from "../Entities/Skier";
import { ObstacleManager } from "../Entities/Obstacles/ObstacleManager";
import { Rect } from './Utils';

export class Game {
    gameWindow = null;
    paused = false;

    constructor() {
        this.assetManager = new AssetManager();
        this.canvas = new Canvas(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);
        this.skier = new Skier(0, 0);
        this.obstacleManager = new ObstacleManager();

        this.pauseMusic = new Audio(Constants.AUDIO[Constants.PAUSE_MUSIC]);
        this.pauseMusic.loop = true;

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    init() {
        this.obstacleManager.placeInitialObstacles();
    }

    async load() {
        await this.assetManager.loadAssets(Constants.ASSETS);
    }

    run() {
        this.canvas.clearCanvas();

        this.updateGameWindow();
        this.drawGameWindow();

        this.frameRequest = requestAnimationFrame(this.run.bind(this));
    }

    togglePause() {
        if (this.paused) {
            this.pauseMusic.pause();
            document.body.classList.remove(Constants.PAUSED_CLASS);
            this.run();
        } else {
            this.pauseMusic.play();
            cancelAnimationFrame(this.frameRequest);
            document.body.classList.add(Constants.PAUSED_CLASS);
        }

        this.paused = !this.paused;
    }

    updateGameWindow() {
        this.skier.tick();

        const previousGameWindow = this.gameWindow;
        this.calculateGameWindow();

        this.obstacleManager.placeNewObstacle(this.gameWindow, previousGameWindow);

        this.skier.checkIfSkierHitObstacle(this.obstacleManager, this.assetManager);
    }

    drawGameWindow() {
        this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top);

        this.skier.draw(this.canvas, this.assetManager);
        this.obstacleManager.drawObstacles(this.canvas, this.assetManager);
    }

    calculateGameWindow() {
        const skierPosition = this.skier.getPosition();
        const left = skierPosition.x - (Constants.GAME_WIDTH / 2);
        const top = skierPosition.y - (Constants.GAME_HEIGHT / 2);

        this.gameWindow = new Rect(left, top, left + Constants.GAME_WIDTH, top + Constants.GAME_HEIGHT);
    }

    handleKeyDown(event) {
        if (this.paused && event.which !== Constants.KEYS.P) {
            event.preventDefault();
            return false;
        }

        switch(event.which) {
            case Constants.KEYS.P:
                this.togglePause();
                break;
            case Constants.KEYS.LEFT:
                this.skier.keyLeft();
                event.preventDefault();
                break;
            case Constants.KEYS.RIGHT:
                this.skier.keyRight();
                event.preventDefault();
                break;
            case Constants.KEYS.UP:
                this.skier.keyUp();
                event.preventDefault();
                break;
            case Constants.KEYS.DOWN:
                this.skier.keyDown();
                event.preventDefault();
                break;
            case Constants.KEYS.SPACE:
                this.skier.keySpace();
                event.preventDefault();
                break;
        }
    }
}