/**
 * TemperatureConverter class is responsible for converting temperatures
 * between Celsius, Fahrenheit, and Kelvin. Its main goal is to be used as if it was a
 * service, so it can be easily replaced by another implementation.
 */
class TemperatureConverter {
    constructor() {
        this.conversionMethods = {
            celsiusToFahrenheit: { method: this.celsiusToFahrenheit, unit: 'F' },
            fahrenheitToCelsius: { method: this.fahrenheitToCelsius, unit: 'ºC' },
            celsiusToKelvin: { method: this.celsiusToKelvin, unit: 'K' },
            kelvinToCelsius: { method: this.kelvinToCelsius, unit: 'ºC' },
            fahrenheitToKelvin: { method: this.fahrenheitToKelvin, unit: 'K' },
        };
    }

    celsiusToFahrenheit(celsius) {
        return celsius * 9/5 + 32;
    }

    fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    celsiusToKelvin(celsius) {
        return Number(celsius) + 273.15;
    }

    kelvinToCelsius(kelvin) {
        return this.roundDigits(Number(kelvin) - 273.15);
    }

    fahrenheitToKelvin(fahrenheit) {
        const celsius = this.fahrenheitToCelsius(fahrenheit);
        return this.celsiusToKelvin(celsius);
    }

    roundDigits(number) {
        return Math.round(number * 100) / 100;
    }

    convert(input, conversionType) {
        const conversion = this.conversionMethods[conversionType];
        const result = conversion.method.call(this, input);
        const unit = conversion.unit;

        return { result, unit };
    }
}

export default TemperatureConverter;
