/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Oct 2024
 * This program changes from red to green to blue then white and repeats.
*/

//setup//
basic.clearScreen()
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P15, 0)

//Code
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P13, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P13, 0)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P14, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P15, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
