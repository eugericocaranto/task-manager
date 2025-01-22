const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require("../src/math")

test('Should calculate total with tip', () => {
  const total = calculateTip(10, 0.3)
  expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
  const total = calculateTip(10)
  expect(total).toBe(12.5)
})

test('Should convert 32 F to 0 C', () => {
  const fahrenheit = fahrenheitToCelsius(32)
  expect(fahrenheit).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
  const celcius = celsiusToFahrenheit(0)
  expect(celcius).toBe(32)
})

// test('Async test demo', (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2)
//     done()
//   }, 2000)
// })