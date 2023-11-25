// TemperatureConverter.test.js
import TemperatureConverter from "../services/TemperatureConverter";

describe('TemperatureConverter', () => {
  const converter = new TemperatureConverter();

  test('converts celsius to fahrenheit', () => {
    expect(converter.celsiusToFahrenheit(0)).toBe(32);
    expect(converter.celsiusToFahrenheit(100)).toBe(212);
    expect(converter.celsiusToFahrenheit(-40)).toBe(-40);
  });

  test('converts fahrenheit to celsius', () => {
    expect(converter.fahrenheitToCelsius(32)).toBeCloseTo(0);
    expect(converter.fahrenheitToCelsius(212)).toBeCloseTo(100);
    expect(converter.fahrenheitToCelsius(-40)).toBeCloseTo(-40);
  });

  test('converts celsius to kelvin', () => {
    expect(converter.celsiusToKelvin(0)).toBeCloseTo(273.15);
    expect(converter.celsiusToKelvin(100)).toBeCloseTo(373.15);
    expect(converter.celsiusToKelvin(-273.15)).toBeCloseTo(0);
  });

  test('converts kelvin to celsius', () => {
    expect(converter.kelvinToCelsius(273.15)).toBeCloseTo(0);
    expect(converter.kelvinToCelsius(373.15)).toBeCloseTo(100);
    expect(converter.kelvinToCelsius(0)).toBeCloseTo(-273.15);
  });

  test('converts fahrenheit to kelvin', () => {
    expect(converter.fahrenheitToKelvin(32)).toBeCloseTo(273.15);
    expect(converter.fahrenheitToKelvin(212)).toBeCloseTo(373.15);
    expect(converter.fahrenheitToKelvin(-40)).toBeCloseTo(233.15);
  });
});