/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Oct 2024
 * This program changes from red to green to blue then white and repeats.
*/

//setup//
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)

// shows the colors of the rainbow
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)

    // red
    pins.digitalWritePin(DigitalPin.P13, 1)
    pause(1000)
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pause(1000)

    // blue
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pause(1000)
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pause(1000)

    // green
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pause(1000)
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // yellow
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pause(1000)
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // purple
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pause(1000)
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // yellow
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pause(1000)
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // orange
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pause(1000)
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
