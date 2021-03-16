basic.forever(function () {
    pins.servoWritePin(AnalogPin.P5, 0)
    pins.servoWritePin(AnalogPin.P6, 180)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P5, 0)
    pins.servoWritePin(AnalogPin.P6, 0)
    basic.pause(465)
})
