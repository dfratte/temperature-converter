import React, { useEffect, useState } from 'react';
import TemperatureConverter from "../services/TemperatureConverter";
import './TemperatureConverterComponent.css';
import thermometerImage from '../img/temperature-converter.png';
import axios from 'axios';

const TemperatureConverterComponent = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [conversionType, setConversionType] = useState("celsiusToFahrenheit");
    const converter = new TemperatureConverter();

    const convert = () => {
        const { result, unit } = converter.convert(input, conversionType);
        const outputMessage = `The result is ${result} ${unit}`;
        setOutput(outputMessage);
    }

    const [lastCommitDate, setLastCommitDate] = useState(null);

    useEffect(() => {
        axios.get('https://api.github.com/repos/dfratte/temperature-converter/commits/main')
            .then(response => {
                setLastCommitDate(new Date(response.data.commit.author.date).toLocaleString());
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="temperature-converter">
            <h1>
                <img src={thermometerImage} alt="Thermometer" style={{height: '50px', marginRight: '10px'}} />
                Temperature Converter
            </h1>
            <div className="form-container">
                <div className="conversion-container">
                    <p>Select a conversion type, enter a temperature, and click Convert</p>
                    <select className="conversion-select" data-testid="conversion-select" value={conversionType} onChange={e => setConversionType(e.target.value)}>
                        <option value="celsiusToFahrenheit">Celsius to Fahrenheit</option>
                        <option value="fahrenheitToCelsius">Fahrenheit to Celsius</option>
                        <option value="celsiusToKelvin">Celsius to Kelvin</option>
                        <option value="kelvinToCelsius">Kelvin to Celsius</option>
                        <option value="fahrenheitToKelvin">Fahrenheit to Kelvin</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="temperature-input">Enter temperature:</label>
                    <input id="temperature-input" type="text" value={input} onChange={e => setInput(e.target.value)} />
                </div>
                <div className="button-container">
                    <button data-testid="convert-button" onClick={convert}>Convert</button>
                </div>
                <p data-testid="output">{output}</p>
            </div>
            <div id="last-commit">
                <p>Last deployed: {lastCommitDate}</p>
            </div>
        </div>
    );
}

export default TemperatureConverterComponent;