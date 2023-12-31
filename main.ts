let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
basic.forever(function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(2000)
    strip.clear()
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(2000)
    strip.clear()
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(2000)
    strip.clear()
})
