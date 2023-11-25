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
        return celsius + 273.15;
    }

    kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }

    fahrenheitToKelvin(fahrenheit) {
        const celsius = this.fahrenheitToCelsius(fahrenheit);
        return this.celsiusToKelvin(celsius);
    }

    convert(input, conversionType) {
        const conversion = this.conversionMethods[conversionType];
        const result = conversion.method.call(this, input);
        const unit = conversion.unit;

        return { result, unit };
    }
}

export default TemperatureConverter;