class SwitchButton {
    lamp
    constructor() {
        this.status = false;

    }

    connectToLamp(ElectricLamp) {
        return this.lamp = ElectricLamp;
    }

    switchOff() {
        this.status = false;
    }

    switchOn() {
        this.status = true;
    }
    switchLampOn(lamp){
        lamp.status = true
    }
}