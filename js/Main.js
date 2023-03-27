let lamp1 = new ElectricLamp()
let btn1 = new SwitchButton();
btn1.switchOn();
btn1.connectToLamp(lamp1)
btn1.switchLampOn(lamp1)
console.log(btn1)